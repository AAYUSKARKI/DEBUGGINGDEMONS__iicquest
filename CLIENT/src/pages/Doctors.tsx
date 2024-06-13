import Doctorcard from './Doctorcard'
import { useSelector } from 'react-redux'
import { useFetchalldoctors } from '../Hooks/useGetalldoctors'
function Otherusers() {
  const {otheruser} = useSelector((state:any)=>state.otheruser)
  console.log('other users are',otheruser)
  useFetchalldoctors()
  return (
    <>
  <div>
  {otheruser?.map((user:any)=>(
        <Doctorcard key={user._id} user={user}/>
    ))}
  </div>
    </>
  )
}

export default Otherusers