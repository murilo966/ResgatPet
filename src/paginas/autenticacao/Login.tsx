import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import titulo from '../../assents/imagens/background/im_background-titulo-login.png'

function Login() {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();

    const [usuarioNome, SetUsuarioNome] = useState('');
    const [usuarioCPF, SetUsuarioCPF] = useState('');
    const [usuarioTelefone, SetUsuarioTelefone] = useState('');
    const [usuarioEmail, SetUsuarioEmail] = useState('');
    const [usuarioSenha, SetUsuarioSenha] = useState('');
    const [usuarioConfirmarSenha, SetUsuarioConfirmarSenha] = useState('');
    const [aceitarTermosCPF, SetAceitarTermosCPF] = useState(false);

    function handleInputUsuarioNome (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioNome(event.target.value);             
    }

    function handleInputUsuarioCPF (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioCPF(event.target.value);             
    }

    function handleInputUsuarioTelefone (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioTelefone(event.target.value);        
    }

    function handleInputUsuarioEmail (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioEmail(event.target.value);             
    }

    function handleInputUsuarioSenha (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioSenha(event.target.value);        
    }

    function handleInputUsuarioConfirmarSenha (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioConfirmarSenha(event.target.value);        
    }

    const handleInputAceitarTermosCPF = () => {
        SetAceitarTermosCPF(!aceitarTermosCPF);
    }

    const handleFazerLogin = () => {
        const container = document.getElementById('login');
        if (container) {
          container.classList.add('active');
        }
    }
    
    const handleCriarConta = () => {
        const container = document.getElementById('login');
        if (container) {
          container.classList.remove('active');
        }
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

    function handleRegistarCPF (){
        if (usuarioNome.trim() === '' ||
            usuarioCPF.trim() === '' || 
            usuarioTelefone.trim() === '' || 
            usuarioEmail.trim() === ''|| 
            usuarioSenha.trim() === '' || 
            usuarioConfirmarSenha.trim() === ''){
            alert('Por favor, preencha todos os campos.');
        } else if(usuarioSenha !== usuarioConfirmarSenha){
            alert('As senha não são iguais.'); 
        } else if(!emailRegex.test(usuarioEmail)){
            alert('Forneça um e-mail válido.');
        } else if(!aceitarTermosCPF ){
            alert('Aceitar os Termos.');
        }
        else{
            alert(
                "\nUsuario: " + usuarioNome +
                "\nUsuario: " + usuarioCPF +
                "\nTelefone: " + usuarioEmail +
                "\nE-Mail: " + usuarioTelefone +
                "\nSenha: " + usuarioSenha
                )            

            navigate('/login');

            // salva os dados do usuario em memoria
            localStorage.setItem('usuarioNome', usuarioNome);
            localStorage.setItem('usuarioNome', usuarioCPF);
            localStorage.setItem('usuarioTefone', usuarioTelefone);
            localStorage.setItem('usuarioEmail', usuarioEmail);
            localStorage.setItem('usuarioSenha', usuarioSenha);
        }        
    }

    return(
        <div>
            <Cabecalho/>

            <div className='container'>
                <div className='container-autenticacao' id='login'>
                    <div className='form-container login'>
                        <form>
                            <h1>Entrar</h1>
                            <img src={titulo} alt="titulo-login" />

                            <input type="text" 
                                name="usuario-nome" 
                                placeholder="nome@email.com"
                                required
                                onChange={handleInputUsuarioEmail}
                            />

                            <input type="password" 
                                name="usuario-senha" 
                                placeholder="*********" 
                                required
                                onChange={handleInputUsuarioSenha}
                            />

                            <button type="button" onClick={handleLogin}> Entrar </button>

                            <Link to='/esqueceu-senha'>
                                <label> Esqueceu a Senha ?</label>
                            </Link>
                        </form>
                    </div>

                    <div className='form-container criar-conta'>
                        <form>
                            <h1>CRIE SUA CONTA</h1>
                            
                            <input type="text" 
                                name="user-name" 
                                placeholder="Nome Completo" 
                                required
                                onChange={handleInputUsuarioNome}
                            />

                            <input type="text" 
                                name="user-cpf" 
                                placeholder="CPF" 
                                required
                                onChange={handleInputUsuarioCPF}
                            />

                            <input type="text" 
                                name="user-telefone" 
                                placeholder="Telefone" 
                                required
                                onChange={handleInputUsuarioTelefone}
                            />

                            <input type="text" 
                                name="user-name" 
                                placeholder="nome@email.com" 
                                required
                                onChange={handleInputUsuarioEmail}
                            />

                            <input type="password" 
                                name="user-password" 
                                placeholder="Crie Sua Senha"
                                required
                                onChange={handleInputUsuarioSenha}
                            />

                            <input type="password" 
                                name="user-password" 
                                placeholder="Confirme Sua Senha"
                                required
                                onChange={handleInputUsuarioConfirmarSenha}
                            />
                            
                            <div className="aceitar-termos">
                                <div className="aceitar">
                                    <input type="checkbox"
                                        name="aceitar-termos-pf" 
                                        checked={aceitarTermosCPF}
                                        onChange={handleInputAceitarTermosCPF}
                                    /> 
                                </div>
                                <Link to='#'>
                                    <label>aceitar os termos</label>
                                </Link>
                            </div>
                                
                            <button type="button" name='entrar' onClick={handleRegistarCPF}> Cadastrar-Se </button> 
                        </form>
                    </div>

                    <div className='toggle-container'>
                        <div className='toggle2'>
                            <div className="toggle-panel toggle-left">
                                <h1>Login</h1>

                                <p> Se mantenha conectado fazendo login com suas informações</p>

                                <button type="button" className='hidden' onClick={handleCriarConta} > Login </button>
                            </div>

                            <div className="toggle-panel toggle-right">
                                <h1>Criar Sua Conta</h1>

                                <p> Crie sua conta, e venha fazer parte da nossa Familia !</p>

                                <button type="button" className='hidden' onClick={handleFazerLogin} > Criar Sua Conta </button>
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