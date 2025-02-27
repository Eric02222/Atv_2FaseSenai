import { useState } from "react"
import './Conversao2.css'

function Conversao2() {
    const [distanciaKm, setDistanciaKm] = useState(0)
    const [milha, setMilha] = useState(0)
    const [legua, setLegua] = useState(0)

    function converterDistancia() {
        let distancia = Number(prompt("Digite a distancia q deseja converter: "))
        setDistanciaKm(distancia)
        setMilha((distancia / 1.609) .toFixed(2))
        setLegua((distancia / 4.828) .toFixed(2))
    }

  return (
    <div className="container-conversao2">
        <h2>Km ➡️ Milhas ➡️ leguas</h2>

        <button onClick={converterDistancia}>Converter</button>

        <p>Km: {distanciaKm} Km</p>
        <p>Milhas: {milha} Milhas</p>
        <p>Leguas: {legua} Legua</p>
    </div>

    
  )
}

export default Conversao2

//rcfe