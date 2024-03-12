import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appprovider } from './Context.jsx'
// import { Appprovider } from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Appprovider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Appprovider>
);
