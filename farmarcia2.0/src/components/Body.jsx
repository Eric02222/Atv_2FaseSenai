import './Body.css'
import Sorteio from './Sorteio'

function Body() {
  return (
    <div className='container_body'>
        <h2>Venha para a inauguração da Farmárcia</h2>
        <p>Sua Farmárcia querida está sob nova direção.
            Venha para a festa de lançamento no dia dd/mm/ aaaaa!
        </p>
        <Sorteio/>
    </div>
  )
}

export default Body