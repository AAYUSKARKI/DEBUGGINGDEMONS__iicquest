import { useRef,useEffect } from 'react'
import { useSelector } from 'react-redux'
function Message({messages} : any) {

 const scroll = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
}, [messages])
  // console.log('message from props',messages)
  // const {message} = useSelector((state: any) => state.message)
  const {user} = useSelector((state:any)=>state.user)
  const {selecteduser} = useSelector((state: any) => state.selecteduser)

  // console.log('message from hook',message)
  // console.log('selected user for sending message',selecteduser)
  // console.log('message sent by receiver',message)
  
  return (
    <>
    <div ref={scroll} className={`chat ${user._id === messages.senderid ? 'chat-start' : 'chat-end'}`}>
    <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={`https://th.bing.com/th/id/R.ddb8326e45d4ce75b15af2af50eaff89?rik=oGdEKCd9w%2f9TMw&pid=ImgRaw&r=0`} />
    </div>
  </div>
  {messages.file?<div className="chat-bubble"><img src={messages.file} alt="Tailwind CSS chat bubble component"  /></div>:null}
  <div className="chat-bubble">{messages.message}</div>
</div>
    </>
  )
}

export default Message