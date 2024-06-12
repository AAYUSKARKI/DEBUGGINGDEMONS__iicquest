// import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
// import socket from './utils/socket'
import SignUp from "./pages/SignUp"
// import { socketIOClient } from 'socket.io-client'
import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"
// import { useNavigate } from 'react-router-dom'
// import { useClient, useMicrophoneAndCameraTracks } from './video/Agorasetup'
function App() {

//   const ws ='http://localhost:7000'
//   const socket = socketIOClient(ws)

//   const navigate = useNavigate()
//   const userId = '1'
// const [inCall, setInCall] = useState(false);
// const[users, setUsers] = useState([]);
// const [start, setStart] = useState(false);
// const [screenTrack, setScreenTrack] = useState(null);
// const [participants, setParticipants] = useState({});
// const [myMeets, setMyMeets] = useState([]);
// const [participantsListOpen,setParticipantsListOpen] = useState(false);
// const [chatsContainerOpen, setChatsContainerOpen] = useState(false);

// const client = useClient();
// const {ready,tracks} = useMicrophoneAndCameraTracks();
// const [newMeetType, setNewMeetType] = useState('');
//   useEffect(() => {
//     socket.on('connect', () => {
//       console.log('connected')

//       socket.on('room-created',({roomId}) => {
//         navigate(`/meet/${roomId}`)
//       })
//     })

//     socket.on('disconnect', () => {
//       console.log('disconnected')
//     })
//   }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/mcq" element={<MentalHealthMCQ/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
