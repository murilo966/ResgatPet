import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

function Login() {
    return(
        <div>
            <Cabecalho/>

            <div className='container'>
                <div className='container-login'>
                    <div className='titulo-login'>
                        <label>Entrar</label>
                    </div>
                    
                    <div className='user-login'>
                        <input type="text" name="user-name" placeholder="nome@email.com"/>
                    </div>

                    <div className='user-password'>
                        <input type="text" name="user-password" placeholder="*********"/>
                    </div>    
                        
                    <div className='bt-entrar'>
                        <button type="button" name='entrar'> Entrar </button>
                    </div>

                    <div className='esqueceu-senha'>
                        <label> Esqueceu a Senha ?</label>
                    </div>

                    <div className='grupo-separador'>
                        <div className='linha'/>

                        <div className='separador-ou'>
                            <label>ou</label>
                        </div>  

                        <div className='linha'/> 
                    </div>
                

                    <div className='bt-cadastrar'>
                        <button type="button" name='cadastrar'> Cadastrar-Se </button>
                    </div>
                </div>
            </div>

            <Rodape/>
            
        </div>

    )
}
export default Login