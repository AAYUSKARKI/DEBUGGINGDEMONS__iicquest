import Otheruser from './Otheruser'
import { useSelector } from 'react-redux'
import { useFetchallusers } from '../../Hooks/useFetchallusers'
function Otherusers() {
  const {otheruser} = useSelector((state:any)=>state.otheruser)
  console.log('other users are',otheruser)
  useFetchallusers()

  return (
    <>
  <div>
  {otheruser?.map((user:any)=>(
        <Otheruser key={user._id} user={user}/>
    ))}
  </div>
    </>
  )
}

export default Otherusers