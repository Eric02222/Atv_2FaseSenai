import React, { useState } from 'react'
import './Pum.css'

function PUM() {
    const [pum, setPum] = useState(0)
    const [resultado, setResultado] = useState('');

    function gerarPum() {
        let i = 0;
        let tabela = '';
        let num = 1

        while (i < pum) {
            if (num % 4 != 0) {
                tabela += num + ""
            } else {
                tabela += "Pum\n"
                i++
            }
            num++
        }

        setResultado(tabela);

    }

    return (
        <div id='container-pum'>
            <div><h2>Pum</h2></div>

            <div>
                <input type="Number" value={pum} onChange={(event) => { const novoValor = Number(event.target.value); setPum(novoValor) }} />
            </div>

            <div id='botaoCalcPres'>
                <button onClick={gerarPum}>Gerar Pum</button>
            </div>

            <div>
                <h3>{resultado}</h3>
            </div>
        </div>
    )
}

export default PUM