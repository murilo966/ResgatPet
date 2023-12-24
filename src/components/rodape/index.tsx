import { Link } from "react-router-dom"
import facebook from '../../assents/imagens/rede-sociais/ic_facebook.png' 
import youtube from '../../assents/imagens/rede-sociais/ic_youtube.png'
import instagram from '../../assents/imagens/rede-sociais/ic_instagram.png'
import bauru from '../../assents/imagens/apoio/ic_prefeitura_bauru.png'
import parceiro from '../../assents/imagens/apoio/ic_parceiro_01.png'

function Rodape() {
    return(
        <div className='rodape-container'>
            <div className="mapa-site">
                <div className="resgatepet">
                    <div className="titulo-rodape">
                        <label>Resgate Pet</label>
                    </div>

                    <div className="sub-titulo">
                        <Link to='/quem-somos'>                        
                            <label className="bt-resgatpet">- Quem Somos</label>                        
                        </Link>
                    </div>

                    <div className="sub-titulo">
                        <Link to='/quem-somos'>
                            <label className="bt-resgatpet">- Nossa Missão</label>
                        </Link>
                    </div>

                    <div className="sub-titulo">
                        <Link to='/quem-somos'>
                            <label className="bt-resgatpet">- Nossos Valores</label>
                        </Link>
                    </div>
                    
                </div>

                <div className="comece-por-aqui">
                    <div className="titulo-rodape">
                        <label className="bt-resgatpet">Comece Por Aqui</label>
                    </div>

                    <div className="sub-titulo">
                        <Link to='/como-ajudar'>                        
                            <label className="bt-resgatpet">- Como Ajudar ?</label>                        
                        </Link>
                    </div>
                </div>
            </div>

            <div className="rede-sociais">
                <div className='rodape'>
                    <div className="titulo-rodape">
                        <label>Redes Sociais</label>
                    </div>

                    <div className="rede-social">

                        <div className="icone">
                            <Link to='#'>
                                <img src={facebook} alt="facebook" />
                            </Link>
                        </div>

                        <div className="icone">
                            <Link to='#'>
                                <img src={youtube} alt="youtube" />
                            </Link>
                        </div>

                        <div className="icone">
                            <Link to='#'>
                                <img src={instagram} alt="instagram" />
                            </Link>
                        </div>
                    </div>                
                </div>
            
                <div className='rodape'>
                    <div className="titulo-rodape">
                        <label>Apoio</label>
                    </div>

                    <div className="apoio">
                         <div className="icone">
                            <Link to='#'>                                
                                <img src={bauru} alt="prefeitura-bauru" />                                
                            </Link>
                        </div>
                        
                        <div className="icone">
                            <Link to='#'>
                                <img src={parceiro} alt="parceiro_01" />
                            </Link>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Rodape