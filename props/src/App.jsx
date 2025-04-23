import { useEffect, useState } from 'react'

import './App.css'
import Produto from './components/Produto'

function App() {

  const [modelo, setModelo] = useState(' ')
  const [preco, setPreco] = useState('')

  const [produtos, setProdutos] = useState([
    {
      id: Date.now(), modelo: `Iphone 35`,
      preco: 30000000

    },

    {
      id: Date.now() + 1, modelo: `Notebook Samsumg`,
      preco: 2000
    },

    {
      id: Date.now() + 2, modelo: `Microondas`,
      preco: 1200
    },

    {
      id: Date.now() + 3, modelo: `Cereal`,
      preco: 15
    },

    {
      id: Date.now() + 4, modelo: `Mesa Gamer`,
      preco: 15000
    },

    {
      id: Date.now() + 5, modelo: `Computador Desktop Gamer, Geforce 270`,
      preco: 6000
    }
  ])

  useEffect(() =>
    console.log(produtos)
    , [produtos])

  useEffect(() =>
    console.log("Carregando dados...")

    , [])

  function testar() {

    let prod = {
      id: Date.now(),
      modelo: `teclado GAYMER com rgb`,
      preco: 250
    }
    //console.log(prod)

    //os tres pontos ... desmontar o arrey, espalha as informações

    setProdutos([prod, ...produtos])

  }

  function adicionarProd() {

    let prod = {
      id: Date.now(),
      modelo: modelo,
      preco: preco
    }

    setProdutos([prod, ...produtos])
  }

  return (
    <div className='container-app'>

      <div className='form-produto'>
        <label >Modelo</label>
        <input type="text" value={modelo} onChange={(event) => setModelo(event.target.value)} />
        <label >Valor</label>
        <input type="number" value={preco} onChange={(event) => { const novoValor = Number(event.target.value); setPreco(novoValor) }}/>

        <button onClick={adicionarProd}>Cadastrar</button>
      </div>


      {/*<Produto modelo={`Galaxy A15`} preco={815} />
      <Produto modelo={`Notebook TinkerPad`} preco={1500} />
      <Produto modelo={`Maquinar de Lavar Panasonic`} preco={2400.67} />
      <Produto modelo={produto[0].modelo} preco={produto[0].preco} />
      <Produto modelo={produto[1].modelo} preco={produto[1].preco} />
      <Produto modelo={produto[2].modelo} preco={produto[2].preco} />*/}

      <button onClick={testar}>Testar</button>

      {/*produto.map((p, index) => (
        <Produto key={index} modelo={p.modelo} preco={p.preco} />
      ))*/}

      <div className="cards">
        {produtos.map((p) => (
          <Produto key={p.id} modelo={p.modelo} preco={p.preco} id={p.id} />
        ))}

      </div>


    </div>

  )
}

export default App
