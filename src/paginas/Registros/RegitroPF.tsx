import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';

function RegistroPF(){
    return(
        <div>
            <Cabecalho/>

            <div className='container'>
                <div className='container-login'>
                    <div className='titulo-login'>
                        <label>CRIE SUA CONTA</label>
                    </div>
                    
                    <div className='usuario-login'>
                        <input type="text" name="user-name" placeholder="nome@email.com"/>
                    </div>

                    <div className='usuario-senha'>
                        <input type="text" name="user-password" placeholder="Crie Sua Senha"/>
                    </div>

                    <div className='usuario-senha-confirmar'>
                        <input type="text" name="user-password" placeholder="Confirme Sua Senha"/>
                    </div>

                    <div className='aceitar-termos'>
                        <input type="checkbox"/>
                        <Link to='#'>
                            <label>aceitar os termos</label>
                        </Link>
                    </div>
                        
                    <div className='bt-entrar'>
                        <Link to='/dashboard'>
                            <button type="button" name='entrar'> Entrar </button>
                        </Link>
                    </div>

                    <div className='grupo-separador'>
                        <div className='linha'/>

                        <div className='separador-ou'>
                            <label>ou</label>
                        </div>  

                        <div className='linha'/> 
                    </div>                

                    <div className='bt-cadastrar'>
                        <Link to='/registro-pj'>
                            <button type="button" name='cadastrar'> Corporativo </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    )
}

export default RegistroPF