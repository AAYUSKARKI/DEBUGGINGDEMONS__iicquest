import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {setuser} from "../redux/userSlice"
import Cookie from "js-cookie"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux"


function Login() {

  const cookie =Cookie.get("accesstoken")
  console.log(cookie,'is cookie')
  const [showPassword, setShowPassword] = useState(false);

  const [user,Setuser] = useState({
    email:'',
    password:''
  })

  const handleChange = (e:any) =>{
    Setuser({...user,[e.target.name]:e.target.value})
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = async (e:any) =>{
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:7000/api/v1/users/login",user)
      console.log(response.data.data)
      Cookie.set("token",response.data.data.accesstoken)
      Cookie.set("refreshToken",response.data.data.refreshtoken)
      dispatch(setuser(response.data.data.user))
      toast.success("login success")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="flex justify-center items-center bg-black h-[100vh]">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col bg-slate-300 gap-3 p-8 w-[400px] rounded-md shadow-md shadow-white">
          <h1 className="m-auto font-bold text-blue-600">LOGIN HERE</h1>
          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="enter your email "
              className=" p-2 h-14  rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password:</label>
            <input
              name="password"
              onChange={handleChange}
              value={user.password}
              type={showPassword ? "text " : "password"}
              placeholder="enter your password "
              className=" p-2  h-14  rounded-md"
            />
            <div
              className="cursor-pointer text-xl flex justify-end -mt-10 pr-2 "
              onClick={() => setShowPassword((preve) => !preve)}
            >
              <span>{showPassword ? <FaRegEye /> : <FaEyeSlash />}</span>
            </div>
          </div>
          <br />
          <button className="bg-blue-700 p-2  h-14 rounded-md hover:bg-blue-600 text-white font-bold">
            Login
          </button>

          <p className="m-auto text-blue-600">Forgot password ?</p>
          <br />

          <Link to={"/signup"} className="m-auto bg-green-500 p-4 rounded-xl shadow-xl shadow-slate-500">
            Create New Account
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Login;
