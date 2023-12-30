import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/menu-lateral';
import Rodape from '../../components/rodape';

function Dasboard (){

    const usuarioNome = localStorage.getItem('usuarioNome') ?? "";

    return(
        <div>
            <Cabecalho/>
                <div className='container'>
                    <div className='dashboard'>
                        <MenuLateral/>

                        <div className='container-painel'>
                            <h1>Dashboard</h1>

                            <div className='container-bem-vindo'>
                                
                                <h3>Olá, Bem-Vindo:</h3>
                                
                                <label>{usuarioNome}</label> 
                            </div>   

                            <div className='painel'>
                                <div className='painel-top'>
                                    <label> LISTA DE PETS <br /> RESGATADO COM SUCESSO</label>
                                </div>

                                <div className='painel-baixo'>
                                    <label> LISTA DE TODOS OS PETS <br /> CADASTRADOS NAS ULTIMAS HORAS</label>

                                    <label> LISTA DE ONG`S</label>
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