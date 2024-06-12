import React from 'react'

function Appointment() {
  return (
    <>
    <h1>Appointment form</h1>
    <p>if you would like for consulation appointment with Dr..... ,please fill out this Appointment Form and we will get back to you as soon as possible</p>
    <hr />

    <div>
        <label htmlFor="">Appointment Date:</label>
        <input className='border p-2 ml-5 ' type="date" />
    </div>
    <div>
        <label htmlFor="">Appointment time:</label>
        <input className='border p-2 ml-5 ' type="time" />
    </div>

    <div>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Username' />
    </div>
    <div>
      <label htmlFor="">Address</label>
      <input type="text" placeholder='Address' />
    </div>
    <div>
      <label htmlFor="">Date of Birth</label>
      <input type="date" />
    </div>


<button>Send an Appointment form</button>
    
    </>
  )
}

export default Appointment