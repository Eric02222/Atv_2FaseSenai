import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Melancias() {

    const navigate = useNavigate()

    function navegar() {
        let nome = prompt('Digite seu nome')

        if (nome == 'gillBates'){
            navigate('/final')
        }else{
            alert('Errou, última tentativa:')
        }
        
    }

    return (
        <div>
            <Navbar />
            <h1>Melancias</h1>  
            <button onClick={navegar}>Navegar para final</button>
        </div>
    )
}

export default Melancias