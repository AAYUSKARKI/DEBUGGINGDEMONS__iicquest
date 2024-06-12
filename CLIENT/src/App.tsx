// import { useEffect } from 'react'
// import Socket  from './utils/index'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
<<<<<<< HEAD
import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
import Appointment from "./pages/Appointment"
=======
import SignUp from "./pages/SignUp"

import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"

>>>>>>> 8d2074485faa811c62794e38839191b0b222c285
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
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/mcq" element={<MentalHealthMCQ/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
<<<<<<< HEAD
          <Route path="/appointment" element={<Appointment/>}/>
=======
>>>>>>> 8d2074485faa811c62794e38839191b0b222c285
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
