import { useState } from "react"
import './ConvHoras.css'

function ConvHoras() {
    const [convHora, setConvHoras] = useState('Resultado não calculado')
    const [convMin, setConvMin] = useState('Resultado não calculado')

    function convHoras() {
        let hora = Number(prompt('Digite um horario para converter em minutos: '))

        setConvHoras(hora)
        setConvMin((hora * 60).toFixed(2))
    }

    function convMinutos() {
        let min = Number(prompt('Digite um horario para converter em horas:'))

        setConvHoras((min / 60).toFixed(2))
        setConvMin(min)
    }

  return (
    <div class='container-convHoras'>
        <h2>Conversão de Horario</h2>

        <button onClick={convHoras}>Converter Horas</button>
        <button onClick={convMinutos}>Converter Minutos</button>


        <p>Horas: {convHora}</p>
        <p>Minutos: {convMin}</p>
    </div>
  )
}

export default ConvHoras