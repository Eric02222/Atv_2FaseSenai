import './App.css'
import Bondinho from './components/Bondinho'
import CalcularPressao from './components/CalcularPressao'
import PUM from './components/PUM'
import QuantidadeHo from './components/QuantidadeHo'
import TipoCombustivel from './components/TipoCombustivel'
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
    </div>
  )
}

export default App
