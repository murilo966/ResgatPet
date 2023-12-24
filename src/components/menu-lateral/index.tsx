import { Link } from 'react-router-dom'
import logo from '../../assents/imagens/logo/ic_resgatpet.png' 

function MenuLateral() {

    const usuarioNome = localStorage.getItem('usuarioNome') ?? "";

    return(
        <div className='container-menu'>
            <div className='imagem-usuario'>
                <Link to='/dashboard/configuracoes'>
                    <img src={logo} alt="imagem-usuario" />
                </Link>
            </div>

            <div className='nome-usuario'>
                {usuarioNome}
            </div>

            <div className='menu-dashboard'>
                <Link to='/dashboard'>
                    <button className='bt-menu' type="button">Dashboard</button>
                </Link>
                <Link to='/dashboard/resgatar-pet'>
                    <button className='bt-menu' type="button">Resgatar Pet</button>  
                </Link>               
                <Link to='/dashboard/acompanhar'>
                    <button className='bt-menu'type="button">Acompanhar</button>
                </Link>
                <Link to='/dashboard/historico'>
                    <button className='bt-menu' type="button">Histórico</button>
                </Link>
                <Link to='/dashboard/configuracoes'>
                    <button className='bt-menu' type="button">Configurações</button>
                </Link>
            </div>
        </div>
    )
}

export default MenuLateral