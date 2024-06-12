import React from 'react'

function Appointment() {
  return (
    <>
      <section className='flex justify-center items-center bg-black h-[100vh]'>
        <div className='flex flex-col gap-12 bg-slate-300 p-10 rounded-md h-[85%]'>
          <h1 className='mx-auto font-bold text-2xl'>APPOINTMENT FORM</h1>
          <p>If you would like a consultation appointment with Dr., please fill out this Appointment Form and we will get back to you as soon as possible</p>
          <hr />

          <div className='flex flex-col gap-2'>
            <label htmlFor="appointmentDate" className='font-semibold'>Appointment Date:</label>
            <input id="appointmentDate" className='border p-2 w-full rounded-md' type="date" />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="appointmentTime" className='font-semibold'>Appointment Time:</label>
            <input id="appointmentTime" className='border p-2 w-full rounded-md' type="time" />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='font-semibold'>Name:</label>
            <input id="name" type="text" placeholder='Username' className='p-2 w-full h-12 rounded-md' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="address" className='font-semibold'>Address:</label>
            <input id="address" type="text" placeholder='Address' className='p-2 w-full h-12 rounded-md' />
          </div>

<<<<<<< HEAD
          <button className='bg-blue-500 text-white p-2 rounded-md mt-4'>Send Appointment Form</button>
        </div>
      </section>
=======
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

    
>>>>>>> afc351e8fed1f09f23d5be257c56ced8686150e4
    </>
  )
}

export default Appointment
