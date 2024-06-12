import mongoose,{Schema} from "mongoose";


const roomSchema=new Schema({

    roomname:{
        type:String
    },
    host:{
        type:String,
        required:true
    },
    meetType:{
        type:String
    },
    meetDate:{
        type:Date
    },
    meetTime:{
        type:Date
    },
    participants:{
        type:Array
    },
    currentParticipants:{
        type:Array
    }
},{
    timestamps:true
})


export const Room= mongoose.model("Room",roomSchema)