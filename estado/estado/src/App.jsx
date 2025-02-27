import { useState } from 'react'
import './App.css'
import Conversao from './components/conversao'
import Conversao2 from './components/Conversao2'
import ConvTemperatura from './components/ConvTemperatura'

function App() {
  const [usuario, setUsuario] = useState("Juca")
  const [senha, setSenha] = useState("Juca")

  let nome = "Ulib"
  function lerNome() {
    nome = prompt("Digite o nome (vou ignorar): ")
    setNome(nome)
    console.log(nome);
  }

  function lerUsuario() {
    let resposta = prompt("DIgite o novo usuario: ")
    setUsuario(resposta)

    let pw = prompt("Digite a nova senha: ")
    let pw2 = prompt("Confirme a senha: ")

    if (pw == pw2) {
      setSenha(pw)
    } else {
      alert("Senha incorreta!!")
    }
  }

  return (
    <>

      <h1>Estado</h1>
      Nome: {nome}

      <div>
        Usuário: {usuario} <br />
        Senha: {senha}
      </div>

      <button onClick={lerNome}>Trocar Nome</button>
      <button onClick={lerUsuario}>Trocar Usuário</button>

      <Conversao />

      <Conversao2 />

      <ConvTemperatura/>

    </>
  )
}

export default App
