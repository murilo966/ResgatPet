import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import MenuLateral from '../../components/menu-lateral';

function Dasboard() {
    const auth = useContext(AuthContext)

    return (
        <div>
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />

                    <div className='container-painel'>
                        <h1>Dashboard</h1>

                        <div className='container-bem-vindo'>

                            <h3>Olá, Bem-Vindo:</h3>

                            <label>{auth.user?.name}</label>
                        </div>

                        <div className='painel'>
                            <div className='painel-top'>
                                <div className='pl-left'>
                                    CONFIGURAÇÃO
                                </div>
                                <div className='pl-center'>
                                    LISTA DE PETS
                                </div>
                                <div className='pl-right'>
                                    RESGATADO COM SUCESSO
                                </div> 
                            </div>

                            <div className='painel-baixo'>
                                <div className='pl-left'>
                                    LISTA DE TODOS OS PETS 
                                </div>
                                <div className='pl-center'>
                                    CADASTRADOS NAS ULTIMAS HORAS
                                </div>
                                <div className='pl-right'>
                                    LISTA DE ONG`S
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dasboard