import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import titulo from '../../assents/imagens/background/im_background-titulo-login.png'
// import { authContext } from '../../contexts/auth/authContext';

function Login() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

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
    const handleLogin = async () => {
        // VERIFICA O EMAIL A SENHA
        if (usuarioEmail && usuarioSenha) {
            const isLogged = await api.Logar
            (
                usuarioEmail, 
                usuarioSenha
            )
            if (isLogged)
            {
                // VERIFICA SE JÁ ESTA NA PAGINA FORMULARIO ANTES DE LOGAR
                if (location.pathname.toLowerCase() === '/dashboard/formulario')
                {
                    navigate('/dashboard/formulario')
                }
                else
                {
                    navigate('/dashboard')
                }
            }
            else
            {
                alert("ERRO INTERNO")
            }
        }
    }

    const handleRegistarCPF = async () => {
        // VERIFICA O EMAIL A SENHA
        if (usuarioEmail && usuarioSenha) {
            const isLogged = await api.CriarConta
            (
                usuarioNome, 
                usuarioCPF, 
                usuarioTelefone,
                usuarioEmail,
                usuarioSenha,
            )
            if (isLogged) {
                const container = document.getElementById('login');
                if (container) {
                    container.classList.remove('active');
                }

                console.log(isLogged)
            }
            else {
                alert("ERRO INTERNO")
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

                            <button type="button" onClick={handleRegistarCPF}> Cadastrar-Se </button>
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