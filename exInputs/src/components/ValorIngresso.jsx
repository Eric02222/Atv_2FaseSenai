import React, { useState } from 'react'
import './ValorIngresso.css'

function ValorIngresso() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function calcValor() {
        const result = Math.abs((valor1 - valor2) / valor1 * 100);
        setResultado(result.toFixed(2));

        setValor1(0);
        setValor2(0)
    }

    return (
        <div id='container-ingresso'>
            <div><h2>Valor do Ingresso</h2></div>

            <div>
                <input type="Number" value={valor1} onChange={(event) => { const novoValor = Number(event.target.value); setValor1(novoValor) }} />
                <input type="Number" value={valor2} onChange={(event) => { const novoValor = Number(event.target.value); setValor2(novoValor) }} />
            </div>

            <div id='botaoCalcPres'>
                <button onClick={calcValor}>Calcular Nota</button>
            </div>

            <div><h2>{resultado}%</h2></div>

        </div>
    )
}

export default ValorIngresso