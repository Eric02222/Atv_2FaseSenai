import React, { useState } from 'react'
import './tipoComb.css'

function TipoCombustivel() {
    const [resultado, setResultado] = useState('')

    function escCombustivel() {
        let Alcohol = 0;
        let Gasoline = 0;
        let Diesel = 0; 
        let escolha = Number(prompt('Digite qual sua preferencia de combustivel'));
        

        while(escolha != 4) {
            if(escolha == 1){
                Alcohol++
            }else if(escolha == 2){
                Gasoline++
            }else if(escolha == 3){
                Diesel++
            }

            escolha = Number(prompt('Digite qual sua preferencia de combustivel'));
        }

        setResultado('Alcohol: ' + Alcohol + ' | Gasoline: ' + Gasoline + ' | Diesel: ' + Diesel);
    }

    return (
        <div id='container-combustivel'>
            <div><h2>TipoCombustivel</h2></div>
            

            <div>
                <button onClick={escCombustivel}>Dar Feedback</button>
            </div>

            <div>
                <h3>{resultado}</h3>
            </div>
        </div>  
    )
}

export default TipoCombustivel