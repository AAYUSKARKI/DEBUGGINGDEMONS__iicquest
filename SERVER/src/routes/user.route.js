import { Router } from "express";
import {
    loginuser,
    registerUser,
    logoutuser,
    refreshaccesstoken,
    changecurrentpassword,
    getcurrentuser,
    updateaccountdetails,
    getallusers,
    getuserbyid,
    updateuser,
    deleteuser,
    forgetpassword,
    resetpassword
}
    from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()


router.route("/register").post(registerUser)

router.route("/updateuser/:id").post( updateuser)

router.route("/login").post(loginuser)

//seruce routes
router.route("/logout").post(verifyJWT, logoutuser)
router.route("/refreshtoken").post(refreshaccesstoken)
router.route("/changepassword").post(verifyJWT, changecurrentpassword)
router.route("/currentuser").get(verifyJWT, getcurrentuser)
router.route("/updateaccount").patch(verifyJWT, updateaccountdetails)
router.route("/allusers").get(getallusers)
router.route("/getuserbyid/:id").get(getuserbyid)
router.route("/deleteuser/:id").delete(verifyJWT, deleteuser)
router.route("/forgetpassword").post(forgetpassword)
router.route("/resetpassword/:token").post(resetpassword)

export default router //can be imported by any name _eg RegisterUser