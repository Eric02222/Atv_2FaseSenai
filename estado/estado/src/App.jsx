import { useState } from 'react'
import './App.css'
import Conversao from './components/conversao'
import Conversao2 from './components/Conversao2'
import ConvTemperatura from './components/ConvTemperatura'
import Estados from './components/Estados'
import Aviso from './components/Aviso'

function App() {
  return (
    <>
      <Aviso />

      <Estados />

      <Conversao />
      <Conversao2 />

      <ConvTemperatura/>

    </>
  )
}

export default App
