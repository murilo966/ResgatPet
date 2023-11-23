import '../style/style.css'
import { Link } from 'react-router-dom'

function MenuLateral() {
    return(
        <div className='container-menu'>
            <div className='imagem-usuario'>
                <img src="./imagens/DogIcon.png" alt="imagem-usuario" />
            </div>

            <div className='nome-usuario'>
                <label> Nome Usuario </label>
            </div>

            <div className='menu-button'>
                <Link to='/dashboard'>
                    <button type="button">Dashboard</button>
                </Link>
                <Link to='/resgatar-pet'>
                    <button type="button">Resgatar Pet</button>  
                </Link>               
                <Link to='/acompanhar'>
                    <button type="button">Acompanhar</button>
                </Link>
                <Link to='/historico'>
                    <button type="button">Histórico</button>
                </Link>
                <Link to='/configuracoes'>
                    <button type="button">Configurações</button>
                </Link>
            </div>
        </div>
    )
}

export default MenuLateral