import '../style/style.css'

function Menu() {
    return(
        <div className='botoesCabecalho'>
            <div className='ft-perfil'>
                <img src="./imagens/DogIcon.png" />
            </div>

            <div className='cab_vazio'>
            </div>

            <div className='bot_navegacao'>

                <div className='bt1'>
                    <button>Quem somos?</button>
                </div>

                <div className='bt2'>
                    <button>Como ajudar?</button>
                </div>

                <div className='bt3'>
                    <button>Cadastre-se</button>
                </div>

                <div className='bt4'>
                    <button >Faça login</button>
                </div>

            </div>
        </div>
    )
    
}

export default Menu