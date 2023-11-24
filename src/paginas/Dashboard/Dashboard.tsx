import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/dashboard';
import Rodape from '../../components/rodape';

function Dasboard() {
    return(
        <div>
            <Cabecalho/>
                <div className='container'>
                    <div className='dashboard'>
                        <MenuLateral/>

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
                                <div className='painel-dasboard-top'>
                                    <div className='painel-dasboard-esquerdo-top'>
                                        <label> ENVIAR NOVO <br /> RESGATE PET</label>
                                    </div>

                                    <div className='painel-dasboard-direito-top'>
                                        <label> LISTA DE PETS <br /> RESGATADO COM SUCESSO</label>
                                    </div>
                                </div>

                                <div className='painel-dasboard-baixo'>
                                    <div className='painel-dasboard-esquerdo-baixo'>
                                        <label> LISTA DE TODOS OS PETS <br /> CADASTRADOS NAS ULTIMAS HORAS</label>
                                    </div>

                                    <div className='painel-dasboard-direito-baixo'>
                                        <label> LISTA DE ONG`S</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            <Rodape/>            
        </div>

    )
}
export default Dasboard