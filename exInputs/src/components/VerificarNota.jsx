import React, { useState } from 'react'
import './VerificarNota.css'

function VerificarNota() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [resultado, setResultado] = useState('');

    function calcNota() {
        const result = (nota1 + nota2) / 2;

        if(result >= 7){
            setResultado('Aprovado')
        }else if(result >= 4){
            setResultado('Recuperação')
        }else if(result < 4){
            setResultado('Reprovado')
        }


    }


    return (
        <div id='container-notaApr'>
            <div >
                <h2>Verificar Notas</h2>
            </div>

            <div>
                <input type="Number" value={nota1} onChange={(event) => {const novoValor = Number(event.target.value); setNota1(novoValor)}}/>
                <input type="Number" value={nota2} onChange={(event) => {const novoValor = Number(event.target.value); setNota2(novoValor)}}/>
            </div>

            <div id='botaoCalcPres'>
                <button onClick={calcNota}>Calcular Nota</button>
            </div>

            <div><h2>{resultado}</h2></div>
        </div>
    )
}

export default VerificarNota