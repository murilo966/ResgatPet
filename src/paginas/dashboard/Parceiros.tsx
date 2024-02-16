import MenuLateral from "../../components/menu-lateral"

function Parceiros() {
    return (
        <div className='container'>
            <div className='dashboard'>
                <MenuLateral />

                <div className='container-painel'>
                    <div className="parceiros">
                        <p>
                            Explore oportunidades incríveis através de parcerias! Junte-se a nós para colaborações 
                            mutuamente benéficas, onde crescemos juntos. Estamos abertos a criar laços sólidos e alcançar
                            novos patamares. Vamos construir algo extraordinário juntos!
                        </p>
                        <div>
                           <h1>Prefeitura de Bauru</h1> 
                           <label>Endereço: Praça das Cerejeiras, 1-59 - Vila Noemy, Bauru - SP - CEP: 17014-900 </label>
                           <button><a href="https://www2.bauru.sp.gov.br/">Saiba Mais !</a></button>
                        </div>

                        <div>
                           <h1>Agrosolo</h1> 
                           <label>Endereço: Rua General Marcondes Salgado, 9-13 - Chácara das Flores, Bauru - SP - CEP: 17013-113 </label>
                           <button><a href="https:/agrosolo.com.br/">Saiba Mais !</a></button>
                        </div>

                        <div>
                           <h1>Petz</h1> 
                           <label>Endereço:Endereço: R. Rubens Pagani, 444 - Jardim Estoril IV, Bauru - SP - CEP: 17016-210 </label>
                           <button><a href="https://www.petz.com.br/">Saiba Mais !</a></button>
                        </div>

                        <div>
                           <h1>Confiança Supermercados</h1> 
                           <label>Endereço: Av. Nações Unidas, 17-150 - Vila Altinopolis, Bauru - SP - CEP: 17013-490 </label>
                           <button><a href="https://www.confianca.com.br/home">Saiba Mais !</a></button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parceiros