import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import logo from '../../assents/imagens/logo/ic_resgatpet.png' 

function MenuLateral() {

    const auth = useContext(AuthContext)

    return(
        <div className='container-menu'>
            <Link to='/dashboard/configuracoes'>
                <img src={logo} alt="imagem-usuario" />
            </Link>

            <label>{auth.user?.name}</label>

            <Link to='/dashboard'>
                <button type="button">Dashboard</button>
            </Link>

            <Link to='/dashboard/resgatar-pet'>
                {auth.user?.level === 2 && <button type="button">Resgatar Pet</button>}
            </Link> 

            <Link to='/dashboard/acompanhar'>
                {auth.user?.level === 1 && <button type="button">Acompanhar</button>}
            </Link>
            
            <Link to='/dashboard/configuracoes'>
                <button type="button">Configurações</button>
            </Link>
        </div>
    )
}

export default MenuLateral