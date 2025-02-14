import './Corpo.css'

function Corpo() {
    function alertarUs() {
        window.location = 'https://www.youtube.com/watch?v=2KnZac176Hs'
    }

    return (
        <div className="container-corpo">
            <h1>Desbravando o React</h1>
            <h2>Sinopse Matrix</h2>
            <p>
                O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.
                À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix,
                que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.
            </p>
            <button onClick={alertarUs}>Alerta</button>
            <img onClick={alertarUs} className='imgMatrix' src="./public/matrix.jpg" alt="Imagen do Matix" />
            {16816*9848949}
        </div>
    )
}

export default Corpo;