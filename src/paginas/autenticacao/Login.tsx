import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();
    const [usuarioEmail, SetUsuarioEmail] = useState('');
    const [usuarioSenha, SetUsuarioSenha] = useState('');

    const fundoPatinhas = {
        background: `url('../../imagens/background/im_backgroud-patas.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

    function handleInputUsuarioEmail (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioEmail(event.target.value);             
    }

    function handleInputUsuarioSenha (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioSenha(event.target.value);        
    }

    function handleLogin (){

        if (usuarioEmail.trim() === '' || 
            usuarioSenha.trim() === '' ){
            alert('Por favor, preencha todos os campos.');
        } else if(!emailRegex.test(usuarioEmail)){
            alert('Forneça um e-mail válido.');
        } else{
            alert(
                "\nEmail: " + usuarioEmail +
                "\nTelefone: " + usuarioSenha
                )            

            navigate('/dashboard');

            // salva os dados do usuario em memoria
            localStorage.setItem('usuarioEmail', usuarioEmail);
            localStorage.setItem('usuarioSenha', usuarioSenha);
        }        
    }

    return(
        <div>
            <Cabecalho/>

            <div className='container'>
                <div className='container-autenticacao'>
                    <div className='autenticacao'>
                        <div className='container-card-login'>
                            <div className='container-descricao' style={fundoPatinhas}>
                                <div className='titulo-boas-vindas'>
                                    <label>Bem-Vindo de volta !</label>
                                </div>

                                <div className='bem-vindo-descricao'>
                                    <label> Se mantenha conectado fazendo login com suas informações ! </label>
                                </div>
                                
                                <div className='bt-novo-cacastro'>
                                    <Link to='/cadastrar'>
                                        <button type="submit" name='cadastrar'> Já tenho conta </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='autenticacao'>
                        <div className='container-login'>
                            <div className='titulo-new-autenticacao' >                            
                                <label>Entrar</label>                            
                            </div>

                            <div className='imagem-autenticacao'>
                                <img src="../../imagens/background/im_background-titulo-login.png" alt="titulo-login" />
                            </div>
                            
                            <div className='input-autenticacao'>
                                <input type="text" 
                                    name="usuario-nome" 
                                    placeholder="nome@email.com"
                                    required
                                    onChange={handleInputUsuarioEmail}
                                />
                            </div>

                            <div className='input-autenticacao'>
                                <input type="password" 
                                    name="usuario-senha" 
                                    placeholder="*********" 
                                    required
                                    onChange={handleInputUsuarioSenha}
                                />
                            </div>                    
                            
                            <div className='bt-autenticacao'>
                                <button type="button" onClick={handleLogin}> Entrar </button>                                            
                            </div>

                            <div className='esqueceu-senha'>
                                <Link to='/esqueceu-senha'>
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

                            <div className='bt-corporacao'>
                                <Link to='/cadastrar'>
                                    <button type="submit" name='cadastrar'> Cadastrar-Se </button>
                                </Link>
                            </div> 
                        </div>

                    </div> 
                </div>
            </div>

            <Rodape/>
            
        </div>

    )
}
export default Login