import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import store from './redux/store'
import './index.css'
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";


const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

const appId = '1299762b34094c8e90bf7faeb05b5db5'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
     <AgoraRTCProvider client={client}>
        <PersistGate loading={null} persistor={persistStore(store)}>
        <App/>
    
        <Toaster/>
        </PersistGate>
        </AgoraRTCProvider>
      </Provider> 
    
  </React.StrictMode>,
)
