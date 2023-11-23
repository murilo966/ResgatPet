import '../style/style.css'
import { Link } from 'react-router-dom'

function Menu() {
    return(
        <div className='botoesCabecalho'>

            <div className='ft-perfil'>
                <Link to='/'>
                    <img src="../../imagens/DogIcon.png" />
                </Link> 
            </div>

            <div className='cab_vazio'>
            </div>

            <div className='bot_navegacao'>

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