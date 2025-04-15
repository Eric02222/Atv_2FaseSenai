import React, { useState } from 'react'
import './CorridaLesma.css'

function CorridaLesma() {
  const [numLe ,setNumLe] = useState(0);
  const [resul, setResul]= useState(0);

  function nivelVelocidade() {
      let velocidade = 0;
      let maxVel = 0
      let i = 0;

      maxVel = velocidade

      while(i < numLe) {
        velocidade = Number(prompt("Digite a velocidade da lesma"))
        if (velocidade > maxVel){
          maxVel = velocidade
        }

        if(maxVel < 10){
          setResul(1)
        }else if(maxVel >= 10  && maxVel < 20){
          setResul(2)
        }else if(maxVel > 20) {
          setResul(3)
        }

      
        console.log(maxVel)
        i++
      }
  }

  return (
    <div id='container-corridaLe'>
        <div>
            <h2>Corrida de Lesmas</h2>
        </div>

        <div>
          <input type="text" value={numLe} onChange={(event) => {const novoValor = Number(event.target.value); setNumLe(novoValor)}}/>
        </div>

        <button onClick={nivelVelocidade}>Verificar Velocidade</button>

        <h3>Velocidade Nivel: {resul}</h3>
        
    </div>
  )
}

export default CorridaLesma;