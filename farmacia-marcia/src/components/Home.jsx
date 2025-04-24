import './Home.css'

function Home() {
    return (
        <div className='container-home'>
            <div className='topo-home'>
                <img src="/img/farmarcia.png" />
                <p>A Farmárcia está de cara nova – e de coração cheio de gratidão por você!</p>

            </div>

            <div className='txt-introducao'>
                <p>Depois de muito planejamento, cuidado e carinho, temos o prazer de apresentar a nova fase da Farmárcia, um espaço que nasceu do sonho da Márcia – uma mulher apaixonada por cuidar de gente e levar bem-estar para a comunidade.
                    um verdadeiro ponto de apoio para a saúde física e emocional de quem passa por aqui. E assim nasceu a Farmárcia, com “á”, em homenagem à própria fundadora e à proposta de fazer diferente: mais humana, mais próxima, mais gente.
                </p>
            </div>

            <div className='txt-ambiente'>
                <div id='informacao-amb'>
                    <p>Novo espaço: mais moderno, funcional, acessível e bonito, para tornar sua visita ainda mais agradável.</p>
                    <p>Ambiente acolhedor: com espaço para espera confortável, atendimento humanizado e até um cafezinho sempre pronto para te receber com carinho.</p>
                </div>

                <img src="/img/farmarcia-placa.png" />
            </div>



            <div className='txt-camisas'>
                <img src="/img/farmarcia-camisetas.png" id='img-camisas' />
                <p>🔸 Produtos exclusivos: agora temos a nossa própria linha de produtos personalizados, incluindo as tão queridas camisetas da Farmárcia, criadas com estampas divertidas e mensagens que transmitem saúde, autoestima e identidade.</p>

            </div>

            <div className='txt-endereço'>
                <p>Onde encontrar a Farmárcia?</p>
                <p>Estamos te esperando no mesmo lugar de sempre, só que de visual novo:
                    Rua das Acácias, 145 – Bairro Vila Esperança, Flor do Campo – SP
                    ⏰ Horário de funcionamento: Segunda a sábado, das 8h às 19h.</p>

            </div>


        </div>
    )
}

export default Home