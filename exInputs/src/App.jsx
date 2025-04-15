import './App.css'
import Bondinho from './components/Bondinho'
import CalcularPressao from './components/CalcularPressao'
import CorridaLesma from './components/CorridaLesma'
import PUM from './components/PUM'
import QuantidadeHo from './components/QuantidadeHo'
import TipoCombustivel from './components/TipoCombustivel'
import ValorIngresso from './components/ValorIngresso'
import VerificarNota from './components/VerificarNota'

function App() {
  

  return (
    <div >
      <CalcularPressao/>
      <QuantidadeHo/>
      <VerificarNota/>
      <Bondinho/>
      <PUM/>
      <TipoCombustivel/>
      <ValorIngresso/>
      <CorridaLesma/> 
    </div>
  )
}

export default App
