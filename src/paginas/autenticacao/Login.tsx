import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import titulo from '../../assents/imagens/background/im_background-titulo-login.png'
import { AuthContext } from '../../contexts/auth/AuthContext';

function Login() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [usuarioNome, SetUsuarioNome] = useState('');
    const [usuarioCPF, SetUsuarioCPF] = useState('');
    const [usuarioTelefone, SetUsuarioTelefone] = useState('');
    const [usuarioEmail, SetUsuarioEmail] = useState('');
    const [usuarioSenha, SetUsuarioSenha] = useState('');
    const [usuarioConfirmarSenha, SetUsuarioConfirmarSenha] = useState('');
    const [aceitarTermosCPF, SetAceitarTermosCPF] = useState(false);

    function handleInputUsuarioNome(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioNome(event.target.value);
    }

    function handleInputUsuarioCPF(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioCPF(event.target.value);
    }

    function handleInputUsuarioTelefone(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioTelefone(event.target.value);
    }

    function handleInputUsuarioEmail(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioEmail(event.target.value);
    }

    function handleInputUsuarioSenha(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioSenha(event.target.value);
    }

    function handleInputUsuarioConfirmarSenha(event: React.ChangeEvent<HTMLInputElement>) {
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

    // LOGIN
    const handleLogin = async() => {
        if (usuarioEmail.trim() === '' ||
            usuarioSenha.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else if (!emailRegex.test(usuarioEmail)) {
            alert('Forneça um e-mail válido.');
        } else {

            // VERIFICA O EMAIL A SENHA
            if(usuarioEmail && usuarioSenha){
                const isLogged = await auth.signin(usuarioEmail, usuarioSenha)
                if(isLogged){
                    navigate('/dashboard');
                }
                else{
                    alert("ERRO INTERNO")
                }
            }           
        }
    }

    function handleRegistarCPF() {
        if (usuarioNome.trim() === '' ||
            usuarioCPF.trim() === '' ||
            usuarioTelefone.trim() === '' ||
            usuarioEmail.trim() === '' ||
            usuarioSenha.trim() === '' ||
            usuarioConfirmarSenha.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else if (usuarioSenha !== usuarioConfirmarSenha) {
            alert('As senha não são iguais.');
        } else if (!emailRegex.test(usuarioEmail)) {
            alert('Forneça um e-mail válido.');
        } else if (!aceitarTermosCPF) {
            alert('Aceitar os Termos.');
        }
        else {

            const container = document.getElementById('login');
            if (container) {
                container.classList.remove('active');
            }
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='container-autenticacao' id='login'>
                    <div className='form-container criar-conta-pf'>
                        <form>
                            <h1 className='entrar'>Entrar</h1>
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
                                <label className='esqueceu-senha'> Esqueceu a Senha ?</label>
                            </Link>
                        </form>
                    </div>

                    <div className='form-container criar-conta-pj'>
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

                            <button type="button" name='cadastrar' onClick={handleRegistarCPF}> Cadastrar-Se </button>
                        </form>
                    </div>

                    <div className='toggle-container'>
                        <div className='toggle'>
                            <div className="toggle-panel toggle-left">
                                <h1>Login</h1>

                                <p> Se mantenha conectado fazendo login com suas informações</p>

                                <button type="button" className='hidden' onClick={handleCriarConta} > Login </button>
                            </div>

                            <div className="toggle-panel toggle-right">
                                <h1>Criar Sua Conta</h1>

                                <p> Crie sua conta, e venha fazer parte da nossa Familia !</p>

                                <button type="button" className='hidden' onClick={handleFazerLogin} > Criar Uma Conta </button>

                                <span>OU</span>

                                <Link to='/cadastrar'>
                                    <button type="button" className='hidden'  > Conta Corporativa </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login