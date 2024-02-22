import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import titulo from '../../assents/imagens/background/im_background-titulo-login.png'
import { UsuarioLogadoContext } from '../../context/authContext';
// import { authContext } from '../../contexts/auth/authContext';

function Login() {
    // const auth = useContext(AuthContext);
    const usuarioContext = useContext(UsuarioLogadoContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [messageErro, SetMessageErro] = useState('');
    const [messageOk, SetMessageOk] = useState('');

    const [usuarioNome, SetUsuarioNome] = useState('');
    const [usuarioCPF, SetUsuarioCPF] = useState('');
    const [usuarioTelefone, SetUsuarioTelefone] = useState('');
    const [usuarioEmail, SetUsuarioEmail] = useState('');
    const [usuarioSenha, SetUsuarioSenha] = useState('');
    const [usuarioSenhaConfirmar, SetUsuarioSenhaConfirmar] = useState('');
    const [usuarioLevel, SetUsuarioLevel] = useState('')
    const [aceitarTermos, SetAceitarTermos] = useState(false);

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
        SetUsuarioSenhaConfirmar(event.target.value);
    }

    const handleInputAceitarTermosCPF = () => {
        SetAceitarTermos(!aceitarTermos);
    }

    // ANIMAÇÃO DO LOGIN
    const handleFazerLogin = () => {
        const container = document.getElementById('login');
        if (container) {
            container.classList.add('active');
        }

        // LIMPA O ERRO AO TROCAR DE TELA
        SetMessageErro('')
    }

    // ANIMAÇÃO DO CRIAR CONTA
    const handleCriarConta = () => {
        const container = document.getElementById('login');
        if (container) {
            container.classList.remove('active');
        }

        // LIMPA O ERRO AO TROCAR DE TELA
        SetMessageErro('')
    }

    // LOGIN
    const handleLogin = async () => {
        const response = await api.Logar(usuarioNome, usuarioEmail, usuarioTelefone, usuarioSenha, usuarioLevel)         

        // VERIFICA O EMAIL A SENHA
        if (usuarioEmail && usuarioSenha) {
            try {
                if (response.status) {
                    // VERIFICA SE JÁ ESTA NA PAGINA FORMULARIO ANTES DE LOGAR
                    if (location.pathname.toLowerCase() === '/dashboard/formulario') {
                        navigate('/dashboard/formulario')
                    }
                    else {
                        navigate('/dashboard')
                    }

                    usuarioContext?.setNome(response.nome)
                    console.log(response)
                }
                else {
                    // MENSAGEM DE ERRO DE VERIFICAÇÂO COM O BANCO DE DADOS
                    SetMessageErro(response.message)                    
                }
            } catch (error) {
                SetMessageErro("Erro Interno !" + error)
            }
        }
        else {
            // MENSAGEM DE VERIFICAÇÃO DE CAMPOS EM BRANCO
            SetMessageErro(response.message)
        }
    }

    const handleRegistarCPF = async () => {
        const response = await api.CriarConta(usuarioNome, usuarioCPF, usuarioTelefone, usuarioEmail, usuarioSenha, usuarioLevel)

        if (usuarioNome && usuarioCPF && usuarioTelefone && usuarioEmail && usuarioSenha) {
            try {
                handleCriarConta()
                SetMessageOk(response.message)
            } catch (error) {
                SetMessageErro("Erro Interno !" + error)
            }
        }
        else {
            // MENSAGEM DE VERIFICAÇÃO DE CAMPOS EM BRANCO
            SetMessageErro(response.message)
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

                            <span className='message-erro'>{messageErro}</span>
                            <span className='message-ok'>{messageOk}</span>
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
                                        checked={aceitarTermos}
                                        onChange={handleInputAceitarTermosCPF}
                                    />
                                </div>
                                <Link to='#'>
                                    <label>aceitar os termos</label>
                                </Link>
                            </div>

                            <button type="button" onClick={handleRegistarCPF}> Cadastrar-Se </button>

                            <span className='message-erro'>{messageErro}</span>
                            <span className='message-ok'>{messageOk}</span>
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