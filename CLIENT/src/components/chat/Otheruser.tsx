import { useEffect } from 'react'
import axios from 'axios'
import { setmessage } from '../../redux/Message'
import { useSelector, useDispatch } from 'react-redux'
import { setselecteduser } from '../../redux/Selecteduser'
interface Props {
  user: {
    username: string
    avatar: string
    _id: string
  }
}
function Otheruser({ user }: Props) {

  const { user: currentuser } = useSelector((state: any) => state.user)
  console.log(currentuser._id,'is my id')
  const dispatch = useDispatch()

  const { selecteduser } = useSelector((state: any) => state.selecteduser)

  console.log(selecteduser, 'is the selected user')

  // console.log(currentuser.user._id, 'is the current user')

  //testing fetching all messages

  const getmessage = async () => {
    try {
      console.log('get message executing')
      const res = await axios.post("http://localhost:7000/api/v1/chats/getmessages", {
        senderid: currentuser._id,
        receiverid: selecteduser._id
      })
      // console.log('get message executed',res.data)
      // console.log(res.data.data)
      dispatch(setmessage(res.data.data))
    } catch (error) {
      console.log(error)
    }
  }
  if (selecteduser) {
    useEffect(() => {
      getmessage()
    }, [selecteduser._id])
  }

  const handleClick = () => {
    // console.log(user)
    dispatch(setselecteduser(user))
  }
  return (
    <>
      <div className={` flex p-2 border border-slate-700 cursor-pointer overflow-hidden`} onClick={handleClick}>
        <div className={'online'}>
          <div className="w-12 rounded-full">
            <img src={user?.avatar} />
          </div>
        </div>
        <h1 className='text-white text-2xl ml-2'>{user?.username}</h1>
      </div>
    </>
  )
}

export default Otheruser