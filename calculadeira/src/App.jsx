import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadeira from './components/Calculadeira'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Calculadeira/>
    </div>
  )
}

export default App
