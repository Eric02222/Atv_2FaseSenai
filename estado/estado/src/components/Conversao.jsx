import { useState } from 'react'
import './Conversao.css'
function Conversao() {
    const [real, setReal] = useState(0)
    const [dolar, setDolar] = useState(0)

    function converterRealPraDolar() {
        let entrada = Number(prompt("digite o valor q deseja converter"))
        setReal(entrada)
        setDolar((entrada / 5.81) .toFixed(2))
    }

    return (
        <div className="container-conversao">
            <h2> Real ➡️ dolar</h2>

            <button onClick={converterRealPraDolar}>Converter</button>

            <p>
                Valor original: R${real}
            </p>
            <p>
                Valor convertido: U${dolar}
            </p>
        </div>
    )
}

export default Conversao