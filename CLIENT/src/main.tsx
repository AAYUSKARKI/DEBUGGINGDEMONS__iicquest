import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Toaster} from 'react-hot-toast'
import './index.css'
import MentalHealthMCQ from './components/MCQ/mcq.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster/>
    <MentalHealthMCQ/>
  </React.StrictMode>
)
