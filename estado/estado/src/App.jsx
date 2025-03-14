import { useState } from 'react'
import './App.css'
import Conversao from './components/conversao'
import Conversao2 from './components/Conversao2'
import ConvTemperatura from './components/ConvTemperatura'
import Estados from './components/Estados'
import Aviso from './components/Aviso'
import AnoBissexto from './components/AnoBissexto'
import CalcImc from './components/CalcImc'
import ConvHoras from './components/ConvHoras'
import ConvVelocidade from './components/ConvVelocidade'

function App() {
  return (
    <>
      <Aviso />

      <Estados /><br />

      <CalcImc/><br />

      <ConvHoras/><br />

      <ConvVelocidade/><br />

      <AnoBissexto/>

      <Conversao />
      <Conversao2 />

      <ConvTemperatura/>

    </>
  )
}

export default App
