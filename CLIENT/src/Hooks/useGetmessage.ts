import axios from 'axios'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setmessage } from '../redux/Message'


const useGetmessage =()=>{

    const {user} = useSelector((state: any) => state.user)
    // console.log(user._id)
    const {selecteduser} = useSelector((state: any) => state.selecteduser)
    // const {message} = useSelector((state: any) => state.message)

    // console.log('message from hook',message)


 
    const dispatch = useDispatch()

    
 
    const getmessage = async () => {
        try {
            const res = await axios.post("http://locahost:7000/api/v1/chats/getmessages", {
                senderid: user._id,
                receiverid: selecteduser._id
            })
            console.log('get message executed',res.data)
            console.log(res.data.data)
            dispatch(setmessage(res.data.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getmessage()
    },[dispatch])
}

export  {useGetmessage}