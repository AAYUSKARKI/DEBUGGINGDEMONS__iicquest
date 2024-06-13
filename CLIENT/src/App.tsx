
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import MentalHealthMCQ from "./components/MCQ/mcq";
import HomePage from "./pages/HomePage";
import Doctorhome from "./pages/Doctorhome";
import Appointment from "./pages/Appointment";
import Consultant from './pages/Consultant';
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import Dailytask from "./pages/Dailytask";
// import Chat from './pages/Chat';
import Collaboration from "./pages/Collaboration";
import Home from "./components/chat/Home";
<<<<<<< HEAD

=======
>>>>>>> d9a76f3114ff15d499018326ccc8f0d46fbd7871
import StageFirst from "./pages/surveyStage/Stage1";
import StageSecond from "./pages/surveyStage/Stage2";
import StageThird from "./pages/surveyStage/Stage3";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mcq" element={<MentalHealthMCQ />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/dailytask" element={<Dailytask />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/collaborator" element={<Collaboration />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/message" element={<Home />} />
<<<<<<< HEAD
          
=======
>>>>>>> d9a76f3114ff15d499018326ccc8f0d46fbd7871
          <Route path="/firststage" element={<StageFirst/>}/>
          <Route path="/doctorchat" element={<Doctorhome/>}/>
          <Route path="/secondstage" element={<StageSecond/>}/>
          <Route path="/thirdstage" element={<StageThird/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          
          <Route path="/consultants" element={<Consultant />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
