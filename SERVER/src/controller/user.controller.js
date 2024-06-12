import { asynchandler } from "../utils/asynchandler.js";
import { Apierror } from "../utils/apierror.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Apiresponse } from "../utils/apiresponse.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../lib/sendEmail.js";
import bcrypt from "bcryptjs"; // Ensure bcrypt is imported for password hashing

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accesstoken = user.generateAccessToken();
        const refreshtoken = user.generateRefreshToken();

        user.refreshtoken = refreshtoken;
        await user.save({ validateBeforeSave: false });

        return { accesstoken, refreshtoken };
    } catch (error) {
        throw new Apierror(500, "Something went wrong while generating refresh and access tokens");
    }
};

const registerUser = asynchandler(async (req, res) => {
    const { email, username, password } = req.body;

    if ([email, username, password].some((field) => field?.trim() === "")) {
        throw new Apierror(400, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new Apierror(409, "User with Email or Username already exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    if (!avatarLocalPath) {
        throw new Apierror(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) {
        throw new Apierror(400, "Avatar file not uploaded");
    }

    const user = await User.create({
        avatar: avatar.url,
        email,
        password,
        username: username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select("-password -refreshtoken");
    if (!createdUser) {
        throw new Apierror(500, "Something went wrong while registering a user");
    }

    await sendEmail(email, "Welcome to LucidMerch", `Thanks for registering with us, ${username}`);

    return res.status(201).json(new Apiresponse(200, createdUser, "User registered successfully"));
});

const loginuser = asynchandler(async (req, res) => {
    const { email, username, password } = req.body;

    if (!username && !email) {
        throw new Apierror(400, "Username or email is required");
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new Apierror(404, "User doesn't exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new Apierror(404, "Incorrect password");
    }

    const { accesstoken, refreshtoken } = await generateAccessAndRefreshToken(user._id);
    const loggedinUser = await User.findById(user._id).select("-password -refreshtoken");

    await sendEmail(email, "Is this you?", "Your account has just logged in!");

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    };

    return res.status(200)
        .cookie("accesstoken", accesstoken, options)
        .cookie("refreshtoken", refreshtoken, options)
        .json(new Apiresponse(200, { user: loggedinUser, accesstoken, refreshtoken }, "User logged in successfully"));
});

const logoutuser = asynchandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, { $unset: { refreshtoken: 1 } }, { new: true });

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    };

    return res.status(200)
        .clearCookie("accesstoken", options)
        .clearCookie("refreshtoken", options)
        .json(new Apiresponse(200, {}, "User logged out successfully"));
});

const refreshaccesstoken = asynchandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshtoken || req.body.refreshtoken;

    if (!incomingRefreshToken) {
        throw new Apierror(401, "Unauthorized access");
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id);

        if (!user || incomingRefreshToken !== user?.refreshtoken) {
            throw new Apierror(401, "Invalid or expired refresh token");
        }

        const { accesstoken, refreshtoken: newRefreshtoken } = await generateAccessAndRefreshToken(user._id);

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        };

        return res.status(200)
            .cookie("accesstoken", accesstoken, options)
            .cookie("refreshtoken", newRefreshtoken, options)
            .json(new Apiresponse(201, "Access token refreshed"));
    } catch (error) {
        throw new Apierror(401, error?.message || "Invalid access token");
    }
});

const forgetpassword = asynchandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        throw new Apierror(400, "Email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new Apierror(404, "User not found");
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/user/resetpassword/${resetToken}`;
    const message = `Your password reset token is:\n\n${resetUrl}\n\nIf you did not request this email, please ignore it.`;

    try {
        await sendEmail({ email: user.email, subject: "Password Recovery", text: message });
    } catch (error) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        throw new Apierror(500, error.message);
    }

    return res.status(200).json(new Apiresponse(200, {}, "Password reset token sent to your email"));
});

const resetpassword = asynchandler(async (req, res) => {
    const { password, confirmpassword } = req.body;

    if (!password || !confirmpassword) {
        throw new Apierror(400, "Password and confirm password are required");
    }

    if (password !== confirmpassword) {
        throw new Apierror(400, "Password and confirm password should match");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findOne({ passwordResetToken: req.params.token });

    if (!user) {
        throw new Apierror(400, "Invalid password reset token");
    }

    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return res.status(200).json(new Apiresponse(200, {}, "Password reset successfully"));
});

const changecurrentpassword = asynchandler(async (req, res) => {
    const { oldpassword, newpassword } = req.body;

    const user = await User.findById(req.user?._id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldpassword);

    if (!isPasswordCorrect) {
        throw new Apierror(400, "Invalid old password");
    }

    user.password = newpassword;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json(new Apiresponse(200, {}, "Password changed successfully"));
});

const getcurrentuser = asynchandler(async (req, res) => {
    return res.status(200).json(new Apiresponse(200, req.user, "Current user fetched successfully"));
});

const updateaccountdetails = asynchandler(async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        throw new Apierror(400, "All fields are required");
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        { $set: { username, email } },
        { new: true }
    ).select("-password");

    return res.status(200).json(new Apiresponse(200, user, "Account details updated successfully"));
});

const updateuseravatar = asynchandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
        throw new Apierror(400, "Avatar file is missing");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar.url) {
        throw new Apierror(400, "Error while uploading avatar");
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        { $set: { avatar: avatar.url } },
        { new: true }
    ).select("-password");

    return res.status(200).json(new Apiresponse(200, user, "Avatar updated successfully"));
});

const getallusers = asynchandler(async (req, res) => {
    const users = await User.find({});
    return res.status(200).json(new Apiresponse(200, users, "All users fetched successfully"));
});

const getuserbyid = asynchandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        throw new Apierror(404, "User not found");
    }
    return res.status(200).json(new Apiresponse(200, user, "User fetched successfully"));
});

const updateuser = asynchandler(async (req, res) => {
    const { username, email, password } = req.body;

    const avatarLocalPath = req.files?.avatar[0]?.path;
    if (!avatarLocalPath) {
        throw new Apierror(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) {
        throw new Apierror(400, "Avatar file not uploaded");
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: { username, email, password, avatar: avatar.url } },
        { new: true }
    ).select("-password");

    if (!user) {
        throw new Apierror(404, "User not found");
    }

    return res.status(200).json(new Apiresponse(200, user, "User updated successfully"));
});

const deleteuser = asynchandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        throw new Apierror(404, "User not found");
    }
    return res.status(200).json(new Apiresponse(200, user, "User deleted successfully"));
});

export {
    registerUser,
    loginuser,
    logoutuser,
    refreshaccesstoken,
    changecurrentpassword,
    getcurrentuser,
    updateaccountdetails,
    updateuseravatar,
    getallusers,
    getuserbyid,
    updateuser,
    deleteuser,
    forgetpassword,
    resetpassword
};
