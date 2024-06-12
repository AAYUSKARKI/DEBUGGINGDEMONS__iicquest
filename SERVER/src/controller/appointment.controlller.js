import { asynchandler } from "../utils/asynchandler.js";
import {Apierror} from "../utils/apierror.js"
import { Apiresponse } from "../utils/apiresponse.js";
import { Appointment } from "../models/appointment.model.js";

const createappointment = asynchandler(async (req, res) => {
    const { username, age, gender, symptoms } = req.body;

    if (!username || !age || !gender || !symptoms) {
        throw new Apierror(400, "All fields are required");
    }

    const appointment = await Appointment.create({
        username,
        age,
        gender,
        symptoms
    });

    if(!appointment){
        throw new Apierror(400, "Appointment not created");
    }

    return res.status(200).json(new Apiresponse(200, appointment, "Appointment created successfully"));

})

const getallappointments = asynchandler(async (req, res) => {
    const appointments = await Appointment.find();
    if(!appointments){
        throw new Apierror(404, "Appointments not found");
    }
    
    return res.status(200).json(new Apiresponse(200, appointments, "Appointments fetched successfully"));
});


export { createappointment }