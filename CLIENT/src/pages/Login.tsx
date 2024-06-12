import React, { useState } from 'react'

function Login() {
    const[showpassword, setShowPassword] = useState()
  return (
    <section  className='flex justify-center items-center bg-black h-[100vh]'>
        <div>
           
            <form className='flex flex-col bg-slate-300 gap-3 p-8 w-[400px] rounded-md' > 
                <h1 className='m-auto font-bold text-blue-600'>LOGIN HERE</h1>
                <div className='flex flex-col gap-1'>
                    <label >Email:</label>
                    <input type="text"
                      placeholder='enter your email '
                      className='bg-slate-500 p-2 h-14  rounded-md' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label >Password:</label>
                    <input type="text"
                      placeholder='enter your password '
                      className='bg-slate-500 p-2  h-14  rounded-md' />
                </div>
                <button className='bg-blue-700 p-2  h-14 rounded-md hover:bg-blue-600'>Login</button>
            </form>
        </div>
    </section>
  )
}

export default Login