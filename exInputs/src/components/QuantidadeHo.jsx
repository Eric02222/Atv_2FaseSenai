import React, { useState } from 'react'
import './QntHo.css'


function QuantidadeHo() {
    const [numeroHo, setNumeroHo] = useState(0);
    const [resultado, setResultado] = useState('');

    function gerarHoHo() {
        let result = 0;
        let qntHo = ''


        while (result < numeroHo) {

            qntHo += 'Ho';
            result++

        }

        setResultado(qntHo);
    }

    return (
        <div id='container2'>
            <h2>Gerar HoHos</h2>

            <div id='inputs'>
                <input type="Number" value={numeroHo} onChange={(event) => { const novoValor = Number(event.target.value); setNumeroHo(novoValor) }} />
            </div>

            <div id='botaoCalcPres'>
                <button onClick={gerarHoHo}>mostrar HoHos</button>
            </div>

            <div>
                <h3>{resultado}</h3>
            </div>
        </div>
    )
}

export default QuantidadeHo