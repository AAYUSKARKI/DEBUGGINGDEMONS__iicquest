import {asynchandler} from "../utils/asynchandler.js";
import {Apierror} from "../utils/apierror.js";
import {Apiresponse} from "../utils/apiresponse.js";
import {Reward} from "../models/reward.model.js";


const createreward = asynchandler(async (req, res) => {

    const { taskname } = req.body;
    if (!taskname) {
        throw new Apierror(400, "All fields are required");
    }

    const reward = await Reward.create({
        taskname
    });

    if(!reward){
        throw new Apierror(400, "Reward not created");
    }

    return res.status(200).json(new Apiresponse(200, reward, "Reward created successfully"));

})

const getallrewards = asynchandler(async (req, res) => {
    const rewards = await Reward.find();
    if(!rewards){
        throw new Apierror(400, "Rewards not found");
    }

    return res.status(200).json(new Apiresponse(200, rewards, "Rewards fetched successfully"));

})

const updatereward = asynchandler(async (req, res) => {
    const { taskname } = req.body;
    const reward = await Reward.findByIdAndUpdate(req.params.id, { $set: { taskname } }, { new: true });
    if (!reward) {
        throw new Apierror(400, "Reward not found");
    }
    return res.status(200).json(new Apiresponse(200, reward, "Reward updated successfully"));
})


export { createreward, getallrewards }