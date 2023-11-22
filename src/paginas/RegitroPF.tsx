import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';
import Cabecalho2 from '../components/cabecalho2';

function RegistroPF(){
    return(
        <div>
            <Cabecalho2/>

            <div className='container'>
                <div className='container-login'>
                    <div className='titulo-login'>
                        <label>CRIE SUA CONTA</label>
                    </div>
                    
                    <div className='usuario-login'>
                        <input type="text" name="user-name" placeholder="nome@email.com"/>
                    </div>

                    <div className='usuario-senha'>
                        <input type="text" name="user-password" placeholder="*********"/>
                    </div>

                    <div className='usuario-senha-confirmar'>
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

export default RegistroPF