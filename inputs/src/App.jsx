import { useState } from 'react'
import './App.css'

function App() {
  const [inputUsername, setInputUsername] = useState('')
  const [inputSenha, setInputSenha] = useState('')
  const [erro, setErro] = useState(false)

  function efetuarLogin() {
    if (inputUsername == 'Gill-Bates' && inputSenha == '1235') {
      setErro(false)
      alert('Login efetuado com sucesso')
    } else {
      setErro(true)

    }


  }

  return (
    <div className='container-app'>
      <h1>Inputs Controlados</h1>

      <label htmlFor="">Usernmae</label>
      <input type="text"
        value={inputUsername}
        onChange={(event) => setInputUsername(event.target.value)}
      />

      <label htmlFor="">Senha</label>
      <input type="password"
        value={inputSenha}
        onChange={(event) => setInputSenha(event.target.value)}
      />
      {erro &&
        <span className='msgErro' >Credenciais Inválidas</span>
      }

      {/*inputValor*/}

      <button onClick={efetuarLogin}>Login</button>
    </div>
  )
}

export default App
