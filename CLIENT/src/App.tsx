import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
<<<<<<< HEAD
import MentalHealthMCQ from "./components/MCQ/mcq"
import HomePage from "./pages/HomePage"
=======
import SignUp from "./pages/SignUp"
>>>>>>> cbdef064e62e791e4346f29db866705f6cc02041
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
<<<<<<< HEAD
          <Route path="/mcq" element={<MentalHealthMCQ/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
=======
          <Route path="/signup" element={<SignUp/>}/>
>>>>>>> cbdef064e62e791e4346f29db866705f6cc02041
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
