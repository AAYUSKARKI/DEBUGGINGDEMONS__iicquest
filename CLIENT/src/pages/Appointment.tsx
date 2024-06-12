import React from 'react'

function Appointment() {
  return (
    <>
<section className='flex justify-center items-center bg-black h-[100vh]'>

  
<div className=' flex flex-col gap-12 bg-slate-300 p-10 rounded-md h-[85%]'>
<h1 className=' mx-auto font-bold text-2xl'>APPOINTMENT FORM</h1>
    <p>if you would like for consulation appointment with Dr..... ,please fill out this Appointment Form and we will get back to you as soon as possible</p>
    <hr />

    <div className='flex'>
        <label htmlFor="">Appointment Date:</label>
        <input className='border p-2  w-full rounded-md ' type="date" />
    </div>


    <div className='flex'>
        <label htmlFor="">Appointment time:</label>
        <input className='border p-2   w-full rounded-md' type="time" />
    </div>

    <div className='flex justify-center items-center gap-8'>
      <label htmlFor="">Name:</label>
      <input type="text" placeholder='Username' className='ml-10 p-2 w-full h-12 rounded-md' />
    </div>


    <div className='flex justify-center items-center gap-8'>
      <label htmlFor="">Address:</label>
      <input type="text" placeholder='Address' className=' ml-8 p-2 w-full h-12 rounded-md' />
    </div>

    <div className='flex '>
      <label htmlFor="">Date of Birth :</label>
      <input type="date" className='w-full ml-10 p-2 rounded-md' />
    </div>
    <button className='bg-blue-700 mx-auto p-3 rounded-md text-white hover:bg-blue-600'>submit appointment</button>


</div>
</section>

    
    </>
  )
}

export default Appointment