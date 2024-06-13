import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import store from './redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
        <App/>
    
        <Toaster/>
        </PersistGate>
      </Provider> 
    
  </React.StrictMode>,
)
