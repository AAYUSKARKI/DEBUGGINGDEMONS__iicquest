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
      avatar:{
        type:String
      },
      role:{
       type:String,enum:["doctor","user"]
      },
      refreshToken:{
       type:String
      },

},
{
    timestamps:true
})

export const user=mongoose.model("User",userSchema)