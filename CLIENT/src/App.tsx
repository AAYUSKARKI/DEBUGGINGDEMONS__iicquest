<<<<<<< HEAD
import { useState } from 'react'

import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'

function App() {
 

  return (
    <>
    {/* <LandingPage/> */}
    <Login/>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
>>>>>>> 98d759cc664ebd17653c8ff6fb18bc765f326e65
    </>
  )
}

export default App
