import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="flex justify-center items-center bg-black h-[100vh]">
      <div>
        <form className="flex flex-col bg-slate-300 gap-3 p-8 w-[400px] rounded-md shadow-md shadow-white">
          <h1 className="m-auto font-bold text-blue-600">LOGIN HERE</h1>
          <div className="flex flex-col gap-1">
            <label>Email:</label>
            <input
              type="text"
              placeholder="enter your email "
              className=" p-2 h-14  rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password:</label>
            <input
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

          <button className="m-auto bg-green-500 p-4 rounded-xl shadow-xl shadow-slate-500">
            Create New Account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
