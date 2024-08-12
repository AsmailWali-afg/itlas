import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StorageProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <StorageProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StorageProvider> 


)
