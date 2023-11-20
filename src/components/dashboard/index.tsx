import '../style/style.css'

function MenuLateral() {
    return(
        <div className='container-menu'>
            <div className='imagem-usuario'>
                <img src="./imagens/DogIcon.png" alt="imagem-usuario" />
            </div>

            <div className='nome-usuario'>
                <label> Andre Comegno </label>
            </div>

            <div className='menu-button'>
                <button type="button">Dashboard</button>                
                <button type="button">Acompanhar</button>
                <button type="button">Histórico</button>
                <button type="button">Configurações</button>
            </div>
        </div>
    )
}

export default MenuLateral