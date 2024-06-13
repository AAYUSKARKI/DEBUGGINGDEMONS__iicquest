import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
function Appointment() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    address: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
       const response = await axios.post('http://localhost:7000/api/v1/appointment/createappointment', data);
       console.log(response.data);
       toast.success(response.data.message);
       navigate('/HomePage')
    } catch (error) {
      console.error(error);
    }
  }
      
  return (
    <>
      <section className='flex justify-center items-center bg-black h-[100vh]'>
        <div className='flex flex-col gap-12 bg-slate-300 p-10 rounded-md h-[85%]'>
          <h1 className='mx-auto font-bold text-2xl'>APPOINTMENT FORM</h1>
          <p>If you would like a consultation appointment with Dr., please fill out this Appointment Form and we will get back to you as soon as possible</p>
          <hr />

          <div className='flex flex-col gap-2'>
            <label htmlFor="appointmentDate" className='font-semibold'>Appointment Date:</label>
            <input 
            value={data.appointmentDate}
            onChange={(e) => setData({...data, appointmentDate: e.target.value})}
            id="appointmentDate"
             className='border p-2 w-full rounded-md' 
             type="date" />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="appointmentTime" className='font-semibold'>Appointment Time:</label>
            <input 
            value={data.appointmentTime} onChange={(e) => setData({...data, appointmentTime: e.target.value})} id="appointmentTime" className='border p-2 w-full rounded-md' type="time" />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='font-semibold'>Name:</label>
            <input id="name" type="text"
            value={data.name} onChange={(e) => setData({...data, name: e.target.value})} placeholder='Username' className='p-2 w-full h-12 rounded-md' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="address" className='font-semibold'>Address:</label>
            <input
            value={data.address} onChange={(e) => setData({...data, address: e.target.value})} id="address" type="text" placeholder='Address' className='p-2 w-full h-12 rounded-md' />
          </div>
          <button type='submit' onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md mt-4'>Send Appointment Form</button>
        </div>
      </section>  
    </>
  )
}

export default Appointment;
