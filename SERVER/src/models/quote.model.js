import mongoose from "mongoose";


const quoteSchema=new Schema({

    quotename:{
        type:String
    },
    author:{
        type:String
    }
})
export const quote= mongoose.model("Quote",quoteSchema)