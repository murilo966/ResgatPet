import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div>
            <Cabecalho/>

            <div className='container'>
                <div className='container-login'>
                    <div className='titulo-login'>
                        <label>Entrar</label>
                    </div>
                    
                    <div className='usuario-login'>
                        <input type="text" name="usuario-nome" placeholder="nome@email.com"/>
                    </div>

                    <div className='usuario-senha'>
                        <input type="text" name="usuario-senha" placeholder="*********"/>
                    </div>    
                        
                    <div className='bt-entrar'>
                        <Link to = '/dashboard'>
                            <button type="button" name='entrar'> Entrar </button>
                        </Link>
                    </div>

                    <div className='esqueceu-senha'>
                        <Link to='/esqueceu-senha' className='semFormato'>
                            <label> Esqueceu a Senha ?</label>
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
                        <Link to='/registro-pf'>
                            <button type="submit" name='cadastrar'> Cadastrar-Se </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Rodape/>
            
        </div>

    )
}
export default Login