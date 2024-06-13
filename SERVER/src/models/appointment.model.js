import mongoose, { Schema } from "mongoose";


const appointmentSchema=new Schema({

    username:{
     type:String,
    },
    appointmentDate:{
    type:String
    },
    appointmenttime:{
     type:String,
    },
    address:{
        type:String,
    }
})
export const Appointment=mongoose.model("Appointment",appointmentSchema)