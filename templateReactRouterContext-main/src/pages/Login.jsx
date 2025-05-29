import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { useNavigate } from 'react-router-dom';

function Login() {
    const {usuarios, setUsuarioLogado} = useContext(GlobalContext)
    const [inputUsername, setInputUsername] = useState('');
    const [inputSenha, setInputSenha] = useState('');
    const navigate = useNavigate()

    function logar() {
        const usuario = usuarios.find((u) => u.nome == inputUsername && u.senha == inputSenha)
        if(usuario){
            alert('Login efetuado com sucesso')
            setUsuarioLogado(usuario)
            navigate('/Home')
        }else {
            alert('Credenciais Incorretas')
            
        }
        

    }

    return (
        <div>
            <Navbar/>
            <h1>Login</h1>
            <div>
                <label htmlFor="input_username">Username</label>
                <input type="text" className="input_username" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
            </div>

            <div>
                <label htmlFor="input_senha">Senha</label>
                <input type="text" className="input_senha" value={inputSenha} onChange={(e) => setInputSenha(e.target.value)} />

            </div>

            <button onClick={logar}>Logar</button>
        </div>
    )
}

export default Login