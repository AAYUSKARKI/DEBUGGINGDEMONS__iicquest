// import { useEffect } from 'react'
// import Socket  from './utils/index'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
import Appointment from "./pages/Appointment"
<<<<<<< HEAD
import Subscription from "./pages/Subscription"
import Navbar from "./components/Navbar"
import Dailytask from "./pages/Dailytask"
import Chat from './pages/Chat'
import Collaboration from "./pages/Collaboration"
=======
import Navbar from "./components/Navbar"
<<<<<<< HEAD
import Subscription from "./pages/Subscription"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Dailytask from "./pages/Dailytask"
=======
>>>>>>> d9966a7fdac6b8ea1c6a194b30710ca1a4dc7738
>>>>>>> eece496c9d3de43ebbcec5bf4ed64def11b8d49f
>>>>>>> 2cb38ed8ebce45b85a4855fe754998a6f8b7062b
>>>>>>> 03b423a2cb22477a776ad8d18c53cba8ef706771
>>>>>>> 0c9c7c753e199a1221fc407c4e69faf3177c038a
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Route path= "/subscription" element= {<Subscription/>}/>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0c9c7c753e199a1221fc407c4e69faf3177c038a
          <Route path="/dailytask" element={<Dailytask/>}/>
          <Route path= "/subscription" element= {<Subscription/>}/>
<<<<<<< HEAD
          <Route path= "/chat" element= {<Chat/>}/>
          <Route path= "/collaborator" element= {<Collaboration/>}/>
=======
=======
>>>>>>> d9966a7fdac6b8ea1c6a194b30710ca1a4dc7738
>>>>>>> eece496c9d3de43ebbcec5bf4ed64def11b8d49f
>>>>>>> 2cb38ed8ebce45b85a4855fe754998a6f8b7062b
>>>>>>> 03b423a2cb22477a776ad8d18c53cba8ef706771
>>>>>>> 0c9c7c753e199a1221fc407c4e69faf3177c038a
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
