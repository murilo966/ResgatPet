import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import logo from '../../assents/imagens/logo/ic_resgatpet.png'
import btMenu from '../../assents/imagens/botoes/bt_recolher.png'

function MenuLateral() {

    const auth = useContext(AuthContext)

    return (
        <div className='container-menu'>
            <Link to='/dashboard/configuracoes'>
                <img src={logo} alt="imagem-usuario" />
            </Link>
            <label>{auth.user?.name}</label>

            <div className="botoes-menus">
                <Link to='/dashboard'>
                    <button
                        type="button"                        
                    >
                        <span className='icon ic-dashboard'></span>
                        Dashboard                        
                    </button>
                    
                </Link>

                <Link to='/dashboard/resgatar-pet'>
                    {
                        // SOMENTE O NUMERO ZERO E O DOIS TEM ACESSO AO BOTAO 
                        (auth.user?.level === 0 || auth.user?.level === 2) &&
                        <button
                            type="button"
                        >
                            <span className='icon ic-resgatar'></span>
                            Resgatar Pet
                        </button>
                    }
                </Link>

                <Link to='/dashboard/acompanhar'>
                    {
                        // SOMENTE O NUMERO ZERO E O UM TEM ACESSO AO BOTAO 
                        (auth.user?.level === 0 || auth.user?.level === 1) &&
                        <button
                            type="button"
                        >
                            <span className='icon ic-acompanhar'></span>
                            Acompanhar
                        </button>
                    }
                </Link>

                <Link to='/dashboard/configuracoes'>
                    <button
                        type="button"
                    >
                        <span className='icon ic-configuracao'></span>
                        Configurações
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default MenuLateral