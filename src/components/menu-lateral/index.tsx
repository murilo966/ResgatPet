import { Link } from 'react-router-dom'
import Props from '../props'

function MenuLateral() {
    return(
        <div className='container-menu'>
            <div className='imagem-usuario'>
                <Link to='/dashboard/configuracoes'>
                    <img src="../../imagens/logo/DogIcon.png" alt="imagem-usuario" />
                </Link>
            </div>

            <div className='nome-usuario'>
                <Props NomeUsuario="Robersvaldo"/>
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