import Otheruser from './Otheruser'
import { useSelector } from 'react-redux'
import { useFetchallusers } from '../../Hooks/useFetchallusers'
import { FaRegUserCircle } from "react-icons/fa";
function Otherusers() {
  const {otheruser} = useSelector((state:any)=>state.otheruser)
  console.log('other users are',otheruser)
  useFetchallusers()

  return (
    <>
   <div className=' flex  flex-col w-[20vw]  bg-slate-700 h-full'>
    <h1 className='flex gap-2 text-3xl font-bold  p-8 bg-slate-500 w-full'><FaRegUserCircle/> Users</h1>
 <div className='font-serif font-semibold text-red-500'>
 {otheruser?.map((user:any)=>(
        <Otheruser key={user._id} user={user}/>
    ))}
 </div>
   </div>
    </>
  )
}

export default Otherusers