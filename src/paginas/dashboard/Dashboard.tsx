import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import MenuLateral from '../../components/menu-lateral';
import cardPet from '../../assents/imagens/cards/im_card-pet.png';

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
                                    <label>Configuração</label>
                                    <img src={cardPet} alt="" />                                    
                                </div>
                                <div className='pl-center'>
                                    <label>LISTA DE PETS</label> 
                                    <img src={cardPet} alt="" />                                    
                                </div>
                                <div className='pl-center'>
                                    <label>LISTA DE PETS</label> 
                                    <img src={cardPet} alt="" />                                    
                                </div>
                                <div className='pl-right'>
                                    <label>RESGATADO COM SUCESSO</label>
                                    <img src={cardPet} alt="" />                                    
                                </div> 
                            </div>

                            <div className='painel-baixo'>
                                <div className='pl-left'>
                                    <label>LISTA DE TODOS OS PETS</label>
                                    <img src={cardPet} alt="" />                                      
                                </div>
                                <div className='pl-center'>
                                    <label>CADASTRADOS NAS ULTIMAS HORAS</label>
                                    <img src={cardPet} alt="" />                                     
                                </div>
                                <div className='pl-center'>
                                    <label>CADASTRADOS NAS ULTIMAS HORAS</label>
                                    <img src={cardPet} alt="" />                                     
                                </div>
                                <div className='pl-right'>
                                    <label>LISTA DE ONG`S</label>
                                    <img src={cardPet} alt="" />                                     
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