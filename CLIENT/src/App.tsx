// import { useEffect } from 'react'
// import Socket  from './utils/index'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
<<<<<<< HEAD
import SignUp from "./pages/SignUp"

=======
import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
>>>>>>> fbc7dc21f355102bc22b7a2234e203bfac8bc0ce
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
<<<<<<< HEAD
          <Route path="/signup" element={<SignUp/>}/>
          
=======
          <Route path="/mcq" element={<MentalHealthMCQ/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
>>>>>>> fbc7dc21f355102bc22b7a2234e203bfac8bc0ce
        </Routes>
        
       
      </BrowserRouter>
    </>
  )
}

export default App
