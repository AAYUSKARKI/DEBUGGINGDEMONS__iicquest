import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

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

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userschema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userschema.methods.generateAccessToken = function (){
  return jwt.sign({
      _id:this._id,
      email: this.email,
      username: this.username
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}
userschema.methods.generateRefreshToken = function () {
  return jwt.sign({
      _id:this._id,
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  }
  )
}

export const user=mongoose.model("User",userSchema)