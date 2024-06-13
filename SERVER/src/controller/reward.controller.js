import { asynchandler } from "../utils/asynchandler.js";
import { Apierror } from "../utils/apierror.js";
import { Apiresponse } from "../utils/apiresponse.js";
import { Taskreward } from "../models/reward.model.js";

const createtask = asynchandler(async (req, res) => {
    const { taskname } = req.body;
    if (!taskname) {
        throw new Apierror(400, "Task name is required");
    }

    const task = await Taskreward.create({
        taskname
    });

    if (!task) {
        throw new Apierror(400, "Task not created");
    }

    return res.status(200).json(new Apiresponse(200, task, "Task created successfully"));
});

const getalltasks = asynchandler(async (req, res) => {
    const tasks = await Taskreward.find();
    if (!tasks) {
        throw new Apierror(400, "Tasks not found");
    }

    return res.status(200).json(new Apiresponse(200, tasks, "Tasks fetched successfully"));
});


const updatetask = asynchandler(async (req, res) => {
    const { status, points } = req.body;

    const updateData = { status };
    if (status === "completed") {
        updateData.points = points || 0;
        updateData.completedAt = new Date();
    }

    const task = await Taskreward.findByIdAndUpdate(req.params.id, { $set: updateData }, { new: true });
    if (!task) {
        throw new Apierror(400, "Task not found");
    }

    return res.status(200).json(new Apiresponse(200, task, "Task updated successfully"));
});

const gettasksandrewardpoints = asynchandler(async (req, res) => {
    const tasks = await Taskreward.find({ status: "completed" }).limit(5);
    if (!tasks) {
        throw new Apierror(400, "Tasks not found");
    }

    const totalPoints = tasks.reduce((acc, task) => acc + task.points, 0);

    return res.status(200).json(new Apiresponse(200, { tasks, totalPoints }, "Tasks and points fetched successfully"));
});

export { createtask, getalltasks, updatetask, gettasksandrewardpoints };
