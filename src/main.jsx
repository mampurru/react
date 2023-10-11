/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Bandera from './components/bandera'
import Reloj from './components/Reloj';
import Formulario_APP from './components/formulario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bandera Appname="TU PAÍS"/>
    <Reloj />
    <Formulario_APP/>
  </React.StrictMode>
)
