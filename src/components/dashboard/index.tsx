import '../style/style.css'

function MenuLateral() {
    return(
        <div className='dashboard'>

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

            <div className='container-painel'>
                <div className='titulo'>
                    <label>Dashboard</label>
                </div>

                <div className='usuario-logado'>
                    <div className='bem-vindo'>
                        <label>Olá, Bem-Vindo:</label>
                    </div>

                    <div className='nome-usuario-logado'>
                        <label>Nome Do Usuario</label>
                    </div>
                </div>                

                <div className='painel-dasboard'>
                    <div className='painel-top'>
                        <div className='painel-esquerdo-top'>
                            <label> ENVIAR NOVO <br /> RESGATE PET</label>
                        </div>

                        <div className='painel-direito-top'>
                            <label> LISTA DE PETS <br /> RESGATADO COM SUCESSO</label>
                        </div>
                    </div>

                    <div className='painel-baixo'>
                        <div className='painel-esquerdo-baixo'>
                            <label> LISTA DE TODOS OS PETS <br /> CADASTRADOS NAS ULTIMAS HORAS</label>
                        </div>

                        <div className='painel-direito-baixo'>
                            <label> LISTA DE ONG`S</label>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MenuLateral