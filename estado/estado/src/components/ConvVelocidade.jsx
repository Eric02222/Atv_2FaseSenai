import { useState } from "react"
import './ConvVelocidade.css'

function ConvVelocidade() {
    const [km, setKm] = useState(0)
    const [milha, setMilha] = useState(0)
    const [mph, setMph] = useState(0)

    function convKm(){
        let velocidade = Number(prompt('Digite a velocidade para ser convertida: '))

        setKm(velocidade)
        setMilha((velocidade / 3.6).toFixed(2))
        setMph((velocidade / 1.609).toFixed(2))
    }

    function convMilia(){
        let velocidade = Number(prompt('Digite a velocidade para ser convertida: '))

        setKm((velocidade * 3.6).toFixed(2))
        setMilha(velocidade)
        setMph((velocidade * 2.237).toFixed(2))
    }

    function convMph(){
        let velocidade = Number(prompt('Digite a velocidade para ser convertida: '))

        setKm((velocidade * 1.609).toFixed(2))
        setMilha((velocidade / 2.237).toFixed(2))
        setMph(velocidade)
    }

  return (
    <div class='container-vel'>
        <h2>Conversão de Velocidade</h2>

        <button onClick={convKm}>Converter KM/h</button>
        <button onClick={convMilia}>Converter m/s</button>
        <button onClick={convMph}>Converter mph</button>

        <p>Km/h: {km}</p>
        <p>Milha/s: {milha}</p>
        <p>Mph: {mph}</p>
    </div>
  )
}

export default ConvVelocidade