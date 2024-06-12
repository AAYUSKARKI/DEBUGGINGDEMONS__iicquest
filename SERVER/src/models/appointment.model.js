import mongoose, { Schema } from "mongoose";


const appointmentSchema=new Schema({

    username:{
     type:String,
    },
    appointmentDate:{
    type:Date
    },
    appointmenttime:{
     type:Date,
    },
    address:{
        type:Number,
    },
    dateofbirth:{
     type:Date
    }
})
export const Appointment=mongoose.model("Appointment",appointmentSchema)