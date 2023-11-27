import { Link } from 'react-router-dom'

function Menu() {
    return(
        <div className='container-cabecalho'>
            <div className='cabecalho'>
                <div className='menu-logo'>
                    <Link to='/'>
                        <img src="../../imagens/logo/ic_resgatpet.png" />
                    </Link> 
                </div>

                <div className='container-navegacao'>
                    <Link to='/'>
                        <button className='bt-navegacao'>Inicio </button>
                    </Link>

                    <Link to='/formulario'>
                        <button className='bt-navegacao'>Quero Ajudar </button>
                    </Link>

                    <Link to= '/quem-somos'>
                        <button className='bt-navegacao'>Quem Somos</button>
                    </Link>

                    <Link to='/registro-pf'>
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