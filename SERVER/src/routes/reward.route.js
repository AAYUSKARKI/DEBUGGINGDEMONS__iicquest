import { Router } from "express";
import { createtask, getalltasks, updatetask, gettasksandrewardpoints } from "../controller/reward.controller.js";

const router = Router()

// Route to create a new task
router.post('/tasks', createtask);

// Route to get all tasks
router.get('/tasks', getalltasks);

// Route to update a task by ID
router.put('/tasks/:id', updatetask);

// Route to get tasks and reward points
router.get('/tasks/rewards', gettasksandrewardpoints);


export default router 