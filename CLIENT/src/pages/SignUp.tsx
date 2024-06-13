import toast from "react-hot-toast";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
function SignUp() {

  const [user,Setuser]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const handleChange = (e:any) =>{
    Setuser({...user,[e.target.name]:e.target.value})
  }

  const navigate = useNavigate()

  const handleSubmit = async (e:any) =>{
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:7000/api/v1/users/register",user)
      console.log(response.data.data)
      toast.success("signup success")
      navigate("/login")
    } catch (error) {
      console.log(error)
    } 
  }
  return (
    <section  className='flex justify-center items-center bg-black h-[100vh]'>
    <div>
       
        <form onSubmit={handleSubmit} className='flex flex-col bg-slate-300 gap-3 p-8 w-[400px] rounded-md shadow-md shadow-white' > 
            <h1 className='m-auto font-bold text-4xl text-blue-600'>Sign Up </h1>
            <div className='flex flex-col gap-1'>
                <label >Username:</label>
                <input type="text"
                  name="username"
                  onChange={handleChange}
                  value={user.username}
                  placeholder='enter Username'
                  className=' p-2 h-14  rounded-md' />
            </div>
            <div className='flex flex-col gap-1'>
                <label >Email:</label>
                <input 
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  type="email"
                  placeholder='enter your email '
                  className=' p-2 h-14  rounded-md' />
            </div>
            <div className='flex flex-col gap-1'>
                <label >Password:</label>
                <input type="password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                  placeholder='enter your password '
                  className=' p-2  h-14  rounded-md' />
            </div>
            <div className='flex flex-col gap-1'>
                <label > Confirm Password:</label>
                <input type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={user.confirmPassword}
                  placeholder='enter your password '
                  className=' p-2  h-14  rounded-md' />
            </div>
            <br />
            <button className='bg-blue-700 p-2  h-14 rounded-md hover:bg-blue-600 text-white font-bold'>create account</button>

            {/* <p className='m-auto text-blue-600'>Forgot password ?</p> */}
<br />
            

            <p>Alredy have account ? <Link to={"/login"} className='text-blue-600'>login</Link></p>
        </form>
    </div>
</section>
  )
}

export default SignUp