import React, { useState } from 'react'
import './Bondinho.css'

function Bondinho() {
    const [alunos, setAlunos] = useState(0);
    const [monitores, setMonitores] = useState(0);
    const [resposta, setResposta] = useState('')

    function verificarQnt() {
        const result = alunos + monitores;

        if(result <= 50){
            setResposta('Sim')
        }else{
            setResposta('Não')
        }
    }

  return (
    <div id='container-bondinho'>
        <div>
            <h2>Bondinho</h2>
        </div>

        <div>
            <p>alunos</p>
            <input id='qntAlunos' type="Number" value={alunos} onChange={(event) => {const novoValor = Number(event.target.value); setAlunos(novoValor)}}/>
            <p>monitores</p>
            <input id='qntMonitores' type="Number" value={monitores} onChange={(event) => {const novoValor = Number(event.target.value); setMonitores(novoValor)}}/>
        </div>

        <div id='botaoCalcPres'>
            <button onClick={verificarQnt}>Verificar</button>
        </div>

        <div><h2>{resposta}</h2></div>
    </div>
  )
}

export default Bondinho