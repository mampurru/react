/* eslint-disable react/no-unknown-property */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Counter_app from './components/counter'
import Bandera from './components/bandera'
import Reloj from './components/Reloj';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter_app initialValue={10} />,
    <Bandera Appname="Cambiar bandera"/>
    <Reloj />
  </React.StrictMode>
)
