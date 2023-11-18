import '../style/style.css'

function MenuLateral() {
    return(
        <div className='container-menu'>

            <div className='imagem-usuario'>
                <img src="./DogIcon.png" alt="imagem-usuario" />
            </div>

            <div className='menu-button'>
                <button type="button">Dashboard</button>
                <button type="button">Dashboard</button>
            </div>
        </div>
    )
}

export default MenuLateral