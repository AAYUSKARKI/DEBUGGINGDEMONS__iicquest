import { createappointment,getallappointments } from "../controller/appointment.controlller.js";
import {Router} from 'express'
const router=Router()

router.route("/createappointment").post(createappointment)

router.route("/getallappointments").get(getallappointments)



export default router
