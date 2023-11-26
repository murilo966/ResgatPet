import { Link } from "react-router-dom"

function Rodape() {
    return(
        <div className='rodape-container'>
            <div className="mapa-site">
                <div className="resgatepet">
                    <div className="titulo-rodape">
                        <label>Resgate Pet</label>
                    </div>

                    <Link to='/quem-somos'>
                        <div className="sub-titulo">
                            <label>- Quem Somos</label>
                        </div>
                    </Link>

                    <Link to='/quem-somos'>
                        <div className="sub-titulo">
                            <label>- Nossa Missão</label>
                        </div>
                    </Link>

                    <Link to='/quem-somos'>
                        <div className="sub-titulo">
                            <label>- Nossos Valores</label>
                        </div>
                    </Link>
                </div>

                <div className="comece-por-aqui">
                    <div className="titulo-rodape">
                        <label>Comece Por Aqui</label>
                    </div>

                    <Link to='/como-ajudar'>
                        <div className="sub-titulo">
                            <label>- Como Ajudar ?</label>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="rede-sociais">
                <div className='rodape'>
                    <div className="titulo-rodape">
                        <label>Redes Sociais</label>
                    </div>

                    <div className="rede-social">
                        <Link to='#'>
                            <div className="icone">
                                <img src="../../imagens/rede-sociais/ic_facebook.png" alt="facebook" />
                            </div>
                        </Link>

                        <Link to='#'>
                            <div className="icone">
                                <img src="../../imagens/rede-sociais/ic_youtube.png" alt="youtube" />
                            </div>
                        </Link>

                        <Link to='#'>
                            <div className="icone">
                                <img src="../../imagens/rede-sociais/ic_instagram.png" alt="instagram" />
                            </div>
                        </Link>
                    </div>                
                </div>
            
                <div className='rodape'>
                    <div className="titulo-rodape">
                        <label>Apoio</label>
                    </div>

                    <div className="apoio">
                        <Link to='#'>
                            <div className="icone">
                                <img src="../../imagens/apoio/ic_prefeitura_bauru.png" alt="prefeitura-bauru" />
                            </div>
                        </Link>

                        <Link to='#'>
                            <div className="icone">
                                <img src="../../imagens/apoio/ic_parceiro_01.png" alt="parceiro_01" />
                            </div>
                        </Link>
                    </div>                    
                </div>
            </div>

        </div>
    )
}

export default Rodape