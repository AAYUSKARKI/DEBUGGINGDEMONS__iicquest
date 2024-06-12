import mongoose from mongoose

const taskrewardSchema=new Schema({

   taskname:{
    type:String
   },
   status:{
    type:String
   }
})
export const taskreward=mongoose.model("Taskreward",taskrewardSchema)