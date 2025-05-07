import React from 'react'

function PropMovimentacao(props) {
  return (
    <div className='container-prop'>
            <h2>{props.nome} - </h2>
            <p>R${props.preco}</p>
            <p>({props.operacao})</p>
        </div>
  )
}

export default PropMovimentacao