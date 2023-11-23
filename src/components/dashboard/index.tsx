import '../style/style.css'
import { Link } from 'react-router-dom'

function MenuLateral() {
    return(
        <div className='container-menu'>
            <div className='imagem-usuario'>
                <img src="../../imagens/DogIcon.png" alt="imagem-usuario" />
            </div>

            <div className='nome-usuario'>
                <label> Nome Usuario </label>
            </div>

            <div className='menu-button'>
                <Link to='/dashboard'>
                    <button type="button">Dashboard</button>
                </Link>
                <Link to='/dashboard/resgatar-pet'>
                    <button type="button">Resgatar Pet</button>  
                </Link>               
                <Link to='/dashboard/acompanhar'>
                    <button type="button">Acompanhar</button>
                </Link>
                <Link to='/dashboard/historico'>
                    <button type="button">Histórico</button>
                </Link>
                <Link to='/dashboard/configuracoes'>
                    <button type="button">Configurações</button>
                </Link>
            </div>
        </div>
    )
}

export default MenuLateral