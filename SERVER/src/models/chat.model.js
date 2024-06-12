import mongoose, { Schema } from 'mongoose'


 const chatSchema= new Schema({
   

    senderid:{
        type:Schema.Types.ObjectId,
        ref:User 
    },
    receiver:{
        type:Schema.Types.ObjectId,
        ref:User
    },
    message:{
        type:String,

    },
    file:{
        type:String
    }


 })
 export const chat=mongoose.model("Chat",chatSchema)