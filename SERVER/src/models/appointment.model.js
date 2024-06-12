import mongoose, { Schema } from "mongoose";


const appointmentSchema=new Schema({

    username:{
      type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String
    },
    symptoms:{
     type:String
    }
})
export const appointment=mongoose.model("Appointment",appointmentSchema)