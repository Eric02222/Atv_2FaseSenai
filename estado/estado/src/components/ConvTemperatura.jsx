import './convTemperatura.css'
import { useState } from 'react'
import './ConvTemperatura.css'

function ConvTemperatura() {
  const [celcius, setCelcius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)
  const [kelvin, setKelvin] = useState(0)
  const [escolha, setEscolha] = useState(false)


  function toggleEscolha() {
    setEscolha(!escolha)
  }

  function converterCelcius() {
    let temp = Number(prompt("Digite a temperatura para ser convertida:"))
    setCelcius((temp) .toFixed(2))
    setFahrenheit(((temp * 9 / 5) + 32) .toFixed(2))
    setKelvin((temp + 273.15) .toFixed(2))

  }

  function converterFahrenheit() {
    let temp = Number(prompt("Digite a temperatura para ser convertida:"))
    setFahrenheit((temp) .toFixed(2))
    setCelcius(((temp -32) * 5/9) .toFixed(2))
    setKelvin(((temp -32) * 5/9 + 273.15) .toFixed(2))

  }

  function converterKelvin() {
    let temp = Number(prompt("Digite a temperatura para ser convertida:"))
    setKelvin((temp) .toFixed(2))
    setFahrenheit(((temp - 273.15) * 9/5 + 32) .toFixed(2))
    setCelcius((temp - 273.15) .toFixed(2))

  }


  return (
    <div className='container-temp'>
        <h2>Conversão de Temperatura</h2>

        <p>Celcius: {celcius}</p>

        <p>Fahrenheit: {fahrenheit}</p>

        <p>Kelvin: {kelvin}</p>

        <button onClick={toggleEscolha}>Converter</button><br />

        {escolha && <button onClick={converterCelcius}>converter Celcius</button>}
        {escolha && <button onClick={converterFahrenheit}>converter Fahrenheit</button>}
        {escolha && <button onClick={converterKelvin}>converter Kelvin</button>}
        

        {/*<button onClick={converterTemp}>Converter</button>*/}
        
    </div>
  )
}

export default ConvTemperatura