import mongoose, { Schema } from 'mongoose'
 

const userSchema= new Schema({
    
      username:{
        type:String,
        required:true,
        unique:true,
        
      },
      password:{
        type:String,
        required:[true,"Password is required"],
        
        
      },
      email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
        
      },
      refreshToken:{
       type:String
      },
    
},
{
    timestamps:true
})

export const user=mongoose.model("User",userSchema)