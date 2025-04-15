import React, { useState } from 'react'
import './tipoComb.css'

function TipoCombustivel() {
    const [alcohol, setAlcohol] = useState(0)
    const [gasoline, setGasoline] = useState(0)
    const [diesel, setDiesel] = useState(0)
    const [msg, setMsg] = useState('')

    function escCombustivel() {
        let mensagem;

        mensagem = `Alcohol: ${alcohol}` +
            `| Gasoline: ${gasoline}` +
            ` | Diesel: ${diesel}`

        setAlcohol(0);
        setGasoline(0);
        setDiesel(0);
        setMsg(mensagem);

    }



    return (
        <div id='container-combustivel'>
            <div><h2>TipoCombustivel</h2></div>

            <div>
                <p>Alcohol</p>
                <input type="Number" value={alcohol} onChange={(event) => { const novoValor = Number(event.target.value); setAlcohol(novoValor) }} />
                <p>Gasoline</p>
                <input type="Number" value={gasoline} onChange={(event) => { const novoValor = Number(event.target.value); setGasoline(novoValor) }} />
                <p>Diesel</p>
                <input type="Number" value={diesel} onChange={(event) => { const novoValor = Number(event.target.value); setDiesel(novoValor) }} />

            </div>

            <div>
                <button onClick={escCombustivel}>Dar Feedback</button>
            </div>

            <div>
                <h3>
                    {msg}
                </h3>
            </div>
        </div>
    )
}

export default TipoCombustivel