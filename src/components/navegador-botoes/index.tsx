import { Link } from 'react-router-dom'
import logo from '../../assents/imagens/logo/ic_resgatpet.png'

function Menu() {
    return(
        <div className='container-cabecalho'>
            <div className='cabecalho'>
                <div className='menu-logo'>
                    <Link to='/'>
                        <img src={logo} />
                    </Link> 
                </div>

                <div className='container-navegacao'>
                    <Link to='/'>
                        <button className='bt-navegacao'>Inicio </button>
                    </Link>

                    <Link to= '/quem-somos'>
                        <button className='bt-navegacao'>Quem Somos</button>
                    </Link>

                    <Link to='/cadastrar'>
                        <button className='bt-navegacao'>Cadastre-se</button>
                    </Link>

                    <Link to='/login'>
                        <button className='bt-navegacao'>Faça login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    
}

export default Menu