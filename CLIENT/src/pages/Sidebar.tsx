import Doctorcard from './Doctorcard'
import { useSelector } from 'react-redux'
import { useFetchalldoctors } from '../Hooks/useGetalldoctors';
import { FaRegUserCircle } from "react-icons/fa";
function Otherusers() {
  const {otheruser} = useSelector((state:any)=>state.otheruser)
  console.log('other users are',otheruser)
  useFetchalldoctors()
  return (
    <>
   <div className=' flex  flex-col w-[20vw]  bg-white h-full'>
    <h1 className='flex gap-2 bg-black text-3xl text-white font-bold  p-8 w-full'><FaRegUserCircle/>Doctors</h1>
 <div className='text-black'>
 {otheruser?.map((user:any)=>(
        <Doctorcard key={user._id} user={user}/>
    ))}
 </div>
   </div>
    </>
  )
}

export default Otherusers