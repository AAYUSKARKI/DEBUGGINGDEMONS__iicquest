import { createappointment } from "../controller/appointment.controlller.js";
import {Router} from 'express'
const router=Router()
router.route("/createappointment").post(createappointment)



export default router
