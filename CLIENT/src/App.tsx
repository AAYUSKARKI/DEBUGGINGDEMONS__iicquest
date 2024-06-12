// import { useEffect } from 'react'
// import Socket  from './utils/index'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
import Appointment from "./pages/Appointment"
import Subscription from "./pages/Subscription"
import Navbar from "./components/Navbar"
import Dailytask from "./pages/Dailytask"
import Chat from './pages/Chat'
import Collaboration from "./pages/Collaboration"
function App() {

  // useEffect(() => {
  //   Socket.on('connect', () => {
  //     console.log('connected')
  //   })

  //   Socket.on('disconnect', () => {
  //     console.log('disconnected')
  //   })
  // }, [])
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/mcq" element={<MentalHealthMCQ/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/dailytask" element={<Dailytask/>}/>
          <Route path= "/subscription" element= {<Subscription/>}/>
          <Route path= "/chat" element= {<Chat/>}/>
          <Route path= "/collaborator" element= {<Collaboration/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
