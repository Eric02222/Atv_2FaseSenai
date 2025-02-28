import React from 'react'
import { useState } from 'react'
import './Estados.css'

function Estados() {
    const [usuario, setUsuario] = useState("Juca")
    const [senha, setSenha] = useState("Juca")
    const [nome, setNome] = useState("Ulib")

    function lerNome() {
        let renomear = prompt("Digite o nome (vou ignorar): ")
        setNome(renomear)
        console.log(renomear);
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
        <div className='container-estado'>
            <h1>Estado</h1>
            Nome: {nome}

            <div>
                Usuário: {usuario} <br />
                Senha: {senha}
            </div>

            <button onClick={lerNome}>Trocar Nome</button>
            <button onClick={lerUsuario}>Trocar Usuário</button>
        </div>
    )
}

export default Estados