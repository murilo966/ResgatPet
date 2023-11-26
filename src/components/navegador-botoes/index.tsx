import { Link } from 'react-router-dom'

function Menu() {
    return(
        <div className='botoes-cabecalho'>

            <div className='foto-perfil'>
                <Link to='/'>
                    <img src="../../imagens/logo/ic_resgatpet.png" />
                </Link> 
            </div>

            <div className='cab-vazio'>
            </div>

            <div className='bt-navegacao'>

                <div className='bt1'>
                    <Link to= '/quem-somos'>
                        <button>Quem somos?</button>
                    </Link>
                </div>

                <div className='bt2'>
                    <Link to='/como-ajudar'>
                        <button>Como ajudar?</button>
                    </Link>
                </div>

                <div className='bt3'>
                    <Link to='/registro-pf'>
                        <button>Cadastre-se</button>
                    </Link>
                </div>

                <div className='bt4'>
                    <Link to='/login'>
                    <button >Faça login</button>
                    </Link>
                </div>

            </div>
        </div>
    )
    
}

export default Menu