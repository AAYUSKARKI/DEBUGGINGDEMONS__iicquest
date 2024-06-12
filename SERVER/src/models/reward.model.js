import mongoose from mongoose

const taskrewardSchema=new Schema({

   taskname:{
    type:String
   },
   status:{
    type:String,
    default:"pending",
    enum:["pending","completed"]
   }
},
{
    timestamps:true
})
export const taskreward=mongoose.model("Taskreward",taskrewardSchema)