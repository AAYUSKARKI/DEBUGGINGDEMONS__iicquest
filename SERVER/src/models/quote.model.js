import mongoose, { Schema } from "mongoose";


const quoteSchema=new Schema({

    quote:{
        type:String
    },
    author:{
        type:String
    }
})
export const Quote= mongoose.model("Quote",quoteSchema)