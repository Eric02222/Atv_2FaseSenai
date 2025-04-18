import { useState } from 'react'
import './AnoBissexto.css'


function AnoBissexto() {

    const [resultado, setResultado] = useState('Resultado não calculado')

    function lerAno() {
        let ano = Number(prompt("Digite um ano:"))
        if(ano % 4 == 0) {
            
            setResultado('É um ano bissexto')
        }else {
            setResultado('Não é bissexto')
        }
    }

    return (
        <div class="container-anoBissexto">
            <h2>Ano Bissexto</h2>

            <button onClick={lerAno}>Informar Ano </button>
            <p>            
                {resultado}
            </p>
        </div>

    )
}


export default AnoBissexto