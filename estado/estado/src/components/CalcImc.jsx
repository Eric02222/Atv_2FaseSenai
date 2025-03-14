import './CalcImc.css'
import { useState } from 'react'

function CalcImc() {
    const [resultado, setResultado] = useState('Resultado não calculado')

    function calcImc() {
        let peso = Number(prompt('Digite seu peso:'))
        let altura = Number(prompt('Digite sua altura:'))

        setResultado((peso / (altura * altura)).toFixed(2))
    }

  return (
    <div class="container-imc">
        <h2>Calcule seu IMC</h2>

        <button onClick={calcImc}>Calcular</button>

        <p>{resultado}</p>
    </div>
  )
}

export default CalcImc