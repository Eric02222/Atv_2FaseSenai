import React, { useState } from 'react'

function Calculadeira() {
    const [numero, setNumero] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    function soma() {
        let resul;
        resul = numero + numero2;
        setResultado(resul);
    }

    function subtracao() {
        let resul;
        resul = numero - numero2;
        setResultado(resul);
    }

    function divisao() {
        let resul;
        resul = numero / numero2;
        setResultado(resul);
    }

    function multiplicacao() {
        let resul;
        resul = numero * numero2;
        setResultado(resul);
    }

  return (
    <div className='container'>
        <div>
            <h1>Calculadeira</h1>
        </div>

        <div>
            <input type="Number" value={numero} onChange={(event) => {const novoValor = Number(event.target.value); setNumero(novoValor)}}/>
            <input type="Number" value={numero2} onChange={(event) => {const novoValor = Number(event.target.value); setNumero2(novoValor)}}/>
            <button value={resultado} onClick={soma}>+</button>
            <button value={resultado} onClick={subtracao}>-</button>
            <button value={resultado} onClick={multiplicacao}>*</button>
            <button value={resultado} onClick={divisao}>/</button>
        </div>

        <div>
            <h1>
                {resultado}
            </h1>
        </div>
    </div>
  )
}

export default Calculadeira