import { Link } from "react-router-dom"
import facebook from '../../assents/imagens/rede-sociais/ic_facebook.png'
import youtube from '../../assents/imagens/rede-sociais/ic_youtube.png'
import instagram from '../../assents/imagens/rede-sociais/ic_instagram.png'
import bauru from '../../assents/imagens/apoio/ic_prefeitura_bauru.png'
import parceiro from '../../assents/imagens/apoio/ic_parceiro_01.png'

function Rodape() {
    return (
        <div className='rodape-container'>
            <div className="rodape">
                <div className="resgatepet">
                    <h3>Resgate Pet</h3>
                    <ul>
                        <li>
                            <Link to='/quem-somos'>
                                <label>- Quem Somos</label>
                            </Link>
                        </li>
                        <li>
                            <Link to='/quem-somos'>
                                <label>- Nossa Missão</label>
                            </Link>
                        </li>
                        <li>
                            <Link to='/quem-somos'>
                                <label>- Nossos Valores</label>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="rodape">
                <h3>Comece Por Aqui</h3>
                <ul>
                    <li>
                        <Link to='/formulario'>
                            <label>- Como Ajudar ?</label>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="rodape">
                <h3>Redes Sociais</h3>
                <div className="row">
                    <Link to='#'>
                        <img src={facebook} alt="facebook" />
                    </Link>

                    <Link to='#'>
                        <img src={youtube} alt="youtube" />
                    </Link>

                    <Link to='#'>
                        <img src={instagram} alt="instagram" />
                    </Link>
                </div>
            </div>

            <div className='rodape'>
                <h3>Apoio</h3>
                <div className="row">
                    <Link to='#'>
                        <img src={bauru} alt="prefeitura-bauru" />
                    </Link>

                    <Link to='#'>
                        <img src={parceiro} alt="parceiro_01" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Rodape