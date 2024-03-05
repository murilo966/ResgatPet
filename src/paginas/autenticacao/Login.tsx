import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import titulo from '../../assents/imagens/background/im_background-titulo-login.png'
import olhos_aberto from '../../assents/imagens/login/ic_olhos_abertos.png'
import olhos_fechado from '../../assents/imagens/login/ic_olhos_fechado.png'
import { UsuarioLogadoContext } from '../../context/authContext';

function Login() {   

    const auth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [messageErro, SetMessageErro] = useState('');
    const [messageOk, SetMessageOk] = useState('');

    const [Level, SetLevel] = useState('1');
    const [usuarioNome, SetUsuarioNome] = useState('');
    const [usuarioCPF_CNPJ, SetUsuarioCPF_CNPJ] = useState('');
    const [usuarioTelefone, SetUsuarioTelefone] = useState('');
    const [usuarioEmail, SetUsuarioEmail] = useState('');
    const [usuarioSenha, SetUsuarioSenha] = useState('');
    const [usuarioSenhaConfirmar, SetUsuarioSenhaConfirmar] = useState('');
    const [aceitarTermos, SetAceitarTermos] = useState(false);

    function handleInputUsuarioNome(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioNome(event.target.value);
    }

    function handleInputUsuarioDocumento(event: React.ChangeEvent<HTMLInputElement>) {
        SetUsuarioCPF_CNPJ(event.target.value);
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

    // ICON OLHOS SENHA
    const handleIconOlhos = () => {
        setMostrarSenha(!mostrarSenha);
    }

    // TERMOS DO CONTRATO
    const handleInputAceitarTermos = () => {
        SetAceitarTermos(!aceitarTermos);
    }

    // MENSAGEM DE VERIFICAÇÃO DE CAMPOS EM BRANCO
    const handleErro = (mensagem: string) => {
        SetMessageErro(mensagem);
    }

    // ANIMAÇÃO DO LOGIN
    const handleBotaoAnimacaoLogin = () => {
        const container = document.getElementById('login');
        if (container) {
            container.classList.add('active');
        }

        // LIMPA O ERRO AO TROCAR DE TELA
        SetMessageErro('')
        SetMessageOk('')
    }

    // ANIMAÇÃO DO CRIAR CONTA
    const handleBotaoAnimacaoCadastrar = () => {
        const container = document.getElementById('login');
        if (container) {
            container.classList.remove('active');
        }

        // LIMPA O ERRO AO TROCAR DE TELA
        SetMessageErro('')
        SetMessageOk('')
    }

    // LOGIN
    const handleLogin = async () => {
        const response = await api.Logar(usuarioEmail, usuarioSenha)

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

                    // PEGA TODOS OS DADOS DO USUARIO
                    auth?.setNome(response.usuario.nome)
                    auth?.setEmail(response.usuario.email)
                    auth?.setTelefone(response.usuario.telefone)
                    auth?.setLevel(response.usuario.level)
                    //console.log(response)
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

    // CRIAR CONTA
    const handleCriarConta = async () => {        

        // VALIDAR TODOS OS CAMPOS
        if (!usuarioNome || !usuarioCPF_CNPJ || !usuarioTelefone || !usuarioEmail) {
            handleErro('Por favor, preencha todos os campos.');
            return;
        }
        else{
            if(!aceitarTermos){
                handleErro('Aceite os termos');
                return;              
            }
        }

        // COMPRAR AS SENHAS
        if (usuarioSenha !== usuarioSenhaConfirmar) {
            handleErro('As senhas não coincidem.');
            return;
        }

        if (usuarioCPF_CNPJ.length > 11) {
            SetLevel('2')
        }
        else {
            SetLevel('1')
        }

        try {
            const response = await api.CriarConta(usuarioNome, usuarioCPF_CNPJ, usuarioTelefone, usuarioEmail, usuarioSenha, Level)

            console.log('Resposta da API: ', response);

            // RESPONSE SUCESSO !
            if (response.status === 200) {
                handleBotaoAnimacaoCadastrar()
                SetMessageOk(response.message)                
            }
            else{
                SetMessageErro('EROO ' + response.message);
            }            
        } catch (error) {
            SetMessageErro('Erro ao criar conta. ' + error);
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='container-autenticacao' id='login'>
                    <div className='form-container logar-conta'>
                        <form>
                            <h1 className='entrar'>Entrar</h1>
                            <img src={titulo} alt="titulo-login" />

                            <div className="container-input">
                                <input
                                    type="text"
                                    name="usuario-nome"
                                    placeholder="nome@email.com"
                                    required
                                    onChange={handleInputUsuarioEmail}
                                />

                                <img
                                    src={mostrarSenha ? olhos_aberto : olhos_fechado}
                                    alt="olhos"
                                    onClick={handleIconOlhos}
                                />

                                <input
                                    type={mostrarSenha ? 'text' : 'password'}
                                    name="usuario-senha"
                                    placeholder="*********"
                                    required
                                    onChange={handleInputUsuarioSenha}
                                />
                            </div>

                            <button type="button" onClick={handleLogin}> Entrar </button>

                            <Link to='/esqueceu-senha'>
                                <label className='esqueceu-senha'> Esqueceu a Senha ?</label>
                            </Link>

                            <span className='message-erro'>{messageErro}</span>
                            <span className='message-ok'>{messageOk}</span>
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
                                placeholder="CPF / CNPJ"
                                required
                                onChange={handleInputUsuarioDocumento}
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
                                        onChange={handleInputAceitarTermos}
                                    />
                                </div>
                                <Link to='#'>
                                    <label>aceitar os termos</label>
                                </Link>
                            </div>

                            <button type="button" onClick={handleCriarConta}> Cadastrar-Se </button>

                            <span className='message-erro'>{messageErro}</span>
                            <span className='message-ok'>{messageOk}</span>
                        </form>
                    </div>

                    <div className='toggle-container'>
                        <div className='toggle'>
                            <div className="toggle-panel toggle-left">
                                <h1>Login</h1>

                                <p> Se mantenha conectado fazendo login com suas informações</p>

                                <button type="button" className='hidden' onClick={handleBotaoAnimacaoCadastrar} > Login </button>
                            </div>

                            <div className="toggle-panel toggle-right">
                                <h1>Criar Sua Conta</h1>

                                <p> Crie sua conta, e venha fazer parte da nossa Familia !</p>

                                <button type="button" className='hidden' onClick={handleBotaoAnimacaoLogin} > Criar Uma Conta </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login