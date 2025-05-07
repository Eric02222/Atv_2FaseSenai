import { useEffect, useState } from 'react'
import './Sorteio.css'

function Sorteio() {
  const [inputNome, setIputNome] = useState('')
  const [nomes, setNomes] = useState([])

  useEffect(() => console.log(nomes), [nomes])

  function cadastrarNome() {
    if (!inputNome) {
      alert("Digite o seu nome")
    } else {
      setNomes([inputNome, ...nomes])
      setIputNome('')
    }

  }

  function sortearCliente() {
    let i = Math.floor(Math.random() * nomes.length)
    alert('Cliente Sorteado: ' + nomes[i])
  }

  return (
    <div className='container_sorteio'>
      <h2>SORTEIO !!!!!</h2>
      <p>Inscreva-se aqui para participar de um sorteio de uma bela camisa</p>

      <label htmlFor="">Nome</label>
      <input type="text" placeholder='Entra no sorteio' value={inputNome} onChange={(event) => setIputNome(event.target.value)} />

      <button onClick={cadastrarNome}>Cadastrar</button>
      <button onClick={sortearCliente}>Sortear</button>
    </div>
  )
}

export default Sorteio