import { Link } from 'react-router-dom'
import logo from '../../assents/imagens/logo/ic_resgatpet.png' 

function MenuLateral() {

    const usuarioNome = localStorage.getItem('usuarioNome') ?? "";

    return(
        <div className='container-menu'>
            <Link to='/dashboard/configuracoes'>
                <img src={logo} alt="imagem-usuario" />
            </Link>

            <label>{usuarioNome}</label>

            <Link to='/dashboard'>
                <button type="button">Dashboard</button>
            </Link>

            <Link to='/dashboard/resgatar-pet'>
                <button type="button">Resgatar Pet</button>  
            </Link> 

            <Link to='/dashboard/acompanhar'>
                <button type="button">Acompanhar</button>
            </Link>
            
            <Link to='/dashboard/configuracoes'>
                <button type="button">Configurações</button>
            </Link>
        </div>
    )
}

export default MenuLateral