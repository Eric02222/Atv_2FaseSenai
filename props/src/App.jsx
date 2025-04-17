import { useState } from 'react'

import './App.css'
import Produto from './components/Produto'

function App() {
  const [produto, setProdutos] = useState([
    {
      modelo: `Iphone 35`,
      preco: 30000000

    },

    {
      modelo: `Notebook Samsumg`,
      preco: 2000
    },

    {
      modelo: `Microondas`,
      preco: 1200
    },

    {
      modelo: `Cereal`,
      preco: 15
    },

    {
      modelo: `Mesa Gamer`,
      preco: 15000
    },

    {
      modelo: `Computador Desktop Gamer, Geforce 270`,
      preco: 6000
    }
  ])

  function testar() {
    console.log(produto)
  }

  return (
    <div className='container-app'>
      <Produto modelo={`Galaxy A15`} preco={815} />
      <Produto modelo={`Notebook TinkerPad`} preco={1500} />
      <Produto modelo={`Maquinar de Lavar Panasonic`} preco={2400.67} />
      <Produto modelo={produto[0].modelo} preco={produto[0].preco} />
      <Produto modelo={produto[1].modelo} preco={produto[1].preco} />
      <Produto modelo={produto[2].modelo} preco={produto[2].preco} />

      <button onClick={testar}>Testar</button>

      {produto.map((p, index) => (
        <Produto key={index} modelo={p.modelo} preco={p.preco} />
      ))}
    </div>

  )
}

export default App
