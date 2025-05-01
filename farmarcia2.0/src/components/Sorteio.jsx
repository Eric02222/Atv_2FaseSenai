import { useEffect, useState } from 'react'
import './Sorteio.css'

function Sorteio() {
    const[inputNome, setIputNome] = useState('')
    const[nomes, setNomes] = useState([])

    useEffect(() => console.log(nomes),[nomes])

    function cadastrarNome() {
        setNomes([inputNome, ...nomes])    
    }

  return (
    <div className='container_sorteio'>
        <h2>SORTEIO !!!!!</h2>
        <p>Inscreva-se aqui para participar de um sorteio de uma bela camisa</p>

        <label htmlFor="">Nome</label>
        <input type="text" placeholder='Entra no sorteio' value={inputNome} onChange={(event) => setIputNome(event.target.value)} />

        <button onClick={cadastrarNome}>Cadastrar</button>
        
    </div>
  )
}

export default Sorteio