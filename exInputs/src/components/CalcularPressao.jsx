import React, { useState } from 'react'
import './CalcularPre.css'


function CalcularPressao() {
    const [pressaoPneu, setPressaoPneu] = useState(0)
    const [pressaoPosto, setPressaoPosto] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcPressao() {
        let resul;

        resul = pressaoPneu - pressaoPosto;

        setResultado(resul);
    }

    return (
        <div id='container'>
            <h2>Calcular Pressão</h2>


            <div>
                <input type="Number" value={pressaoPneu} onChange={(event) => { const novoValor = Number(event.target.value); setPressaoPneu(novoValor) }} />
                <input type="Number" value={pressaoPosto} onChange={(event) => { const novoValor = Number(event.target.value); setPressaoPosto(novoValor) }} />


            </div>

            <div id='botaoCalcPres'>
                <button onClick={calcPressao}>Calcular Pressão</button>

            </div>

            <div><h2>{resultado}</h2></div>
        </div>
    )
}

export default CalcularPressao