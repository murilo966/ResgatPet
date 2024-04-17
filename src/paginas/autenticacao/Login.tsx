import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import { api } from '../../api';
import titulo from '../../assents/imagens/background/im_background-titulo-login.png'
import olhos_aberto from '../../assents/imagens/login/ic_olhos_abertos.png'
import olhos_fechado from '../../assents/imagens/login/ic_olhos_fechado.png'
import { UsuarioLogadoContext } from '../../context/authContext';

function Login() {

    const auth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate();

    const [mostrarSenha, setMostrarSenha] = useState(false);
    const[loading, setLoading] = useState(false)

    const [messageErro, SetMessageErro] = useState('');
    const [messageOk, SetMessageOk] = useState('');
   

    const NIVEL_CPF = '1';
    const NIVEL_CNPJ = '2';
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
        SetUsuarioEmail('');
        SetUsuarioSenha('');
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

        SetUsuarioNome('');
        SetUsuarioCPF_CNPJ('');
        SetUsuarioTelefone('');
        SetUsuarioEmail('');
        SetUsuarioSenha('');
        SetUsuarioSenhaConfirmar('');
        SetAceitarTermos(false);
    }

    // LOGIN
    const handleLogin = async () => {
        setLoading(true)
        try {
            const response = await api.Logar(usuarioEmail, usuarioSenha);
            
            setLoading(false);
            // VERIFICARA SE USUARIO EXISTE NO BANCO DE DADOS
            if (!response.return || !response.return[0]) {
                handleErro("Usuário não encontrado.");
                return;
            }

            // OUTROS ERROS
            if (!response.return || !response.return[1]) {
                console.log(response.message);
                handleErro(response.message)
                return;
            }
            
            // VERIFICA SE O E-MAIL ESTÁ EM BRANCO (return[1] ERRO)
            if (!response.return || !response.return[1]) {
                // RESPONSE.MESSAGE[ARRAY DA PRIMEIRA MENSAGEM]
                const userData = response.message[0];
                handleErro(userData);
                return;
            }

            // VERIFICA SE A SENHA ESTÁ EM BRANCO (return[1] ERRO)
            if (!response.return || !response.return[1]) {
                const userData = response.message[1];
                handleErro(userData);
                return;
            }

            // LOGIN COM SUCESSO !
            const userData = response.return[0];
            const userID = userData.ID;
            const userNome = userData.NOMECOMPLETO;
            const userEmail = userData.EMAIL;
            const userTelefone = userData.TELEFONE;
            const userLevel = userData.LEVEL;

            // IR PARA PAGINA DASHBOARD DEPOIS DE LOGADO
            navigate('/dashboard');

            // PEGAR O JSON E ATRIBUIR AO useContext
            auth?.setID(userID);
            auth?.setNome(userNome);
            auth?.setEmail(userEmail);
            auth?.setTelefone(userTelefone);
            auth?.setLevel(userLevel);

        } catch (error) {
            handleErro("Erro Interno !" + error);
            setLoading(false);
        }
    }

    // CRIAR CONTA
    const handleCriarConta = async () => {
        // setLoading(true)
        try {

            // VERIFICA SE TODOS OS COMPOS
            if (!usuarioNome || !usuarioCPF_CNPJ || !usuarioTelefone || !usuarioEmail) {
                handleErro('Por favor, preencha todos os campos.');
                return;
            }

            // COMPARAR AS SENHAS
            if (usuarioSenha !== usuarioSenhaConfirmar || !usuarioSenha || !usuarioSenhaConfirmar) {
                handleErro('As senhas não coincidem.');
                return;
            }

            // VERIFICAR FORMATO DO CPF/CNPJ
            if (usuarioCPF_CNPJ.length !== 11 && usuarioCPF_CNPJ.length !== 14) {
                handleErro('CPF ou CNPJ inválido.');
                return;
            }

            // VERIFICA OS TERMOS FOI SELECIONADO 
            if (!aceitarTermos) {
                handleErro('Aceitar os Termos');
                return;
            }
            // VERIFICA OS CARACTERES DO CPF E CNPJ
            const level = usuarioCPF_CNPJ.length === 14 ? NIVEL_CNPJ : NIVEL_CPF;
            setLoading(true)
            const response = await api.CriarConta(usuarioNome, usuarioCPF_CNPJ, usuarioTelefone, usuarioEmail, usuarioSenha, level)

            
            // CADASTRADO COM SUCEESO !
            if (response.success) {
                handleBotaoAnimacaoCadastrar();
                SetMessageOk(response.message);
            } else {
                handleErro(response.message);
            }
            setLoading(false)

        } catch (error) {
            handleErro('Erro ao criar conta. ' + error);
            setLoading(false)
        }
    }

    // USER EFFECT PARA INICIO IMEDIATO 
    useEffect(() => {
        // VERIFICAÇÃO SE ESTA LOGADO
        if (auth?.email) {
            // REDIRECIONAR PARA DASHBOARD
            navigate('/')
        }
    }, [])

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
                                    // ANIMAÇÃO DA VISUALIZAÇÃO DA SENHA
                                    src={mostrarSenha ? olhos_aberto : olhos_fechado}
                                    alt="olhos"
                                    onClick={handleIconOlhos}
                                />

                                <input
                                    // ANIMAÇÃO DA VISUALIZAÇÃO DA SENHA
                                    type={mostrarSenha ? 'text' : 'password'}
                                    name="usuario-senha"
                                    placeholder="*********"
                                    required
                                    onChange={handleInputUsuarioSenha}
                                />
                                
                            </div>
                            {loading && 
                                <Button
                                    color="primary"
                                    disabled
                                >
                                    <Spinner type="border"size="sm">
                                        Carregando...
                                    </Spinner>
                                </Button>
                            }
                            {!loading &&
                                <button type="button" onClick={handleLogin}> Entrar </button>
                            }
                            

                            <Link to='/esqueceu-senha'>
                                <label className='esqueceu-senha'> Esqueceu a Senha ?</label>
                            </Link>

                            {/* ALERTA DE AVISO PARA USUARIO */}
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
                                value={usuarioNome}
                                required
                                onChange={handleInputUsuarioNome}
                            />

                            <input type="text"
                                name="user-cpf"
                                placeholder="CPF / CNPJ"
                                value={usuarioCPF_CNPJ}
                                required
                                onChange={handleInputUsuarioDocumento}
                            />

                            <input type="text"
                                name="user-telefone"
                                placeholder="Telefone"
                                value={usuarioTelefone}
                                required
                                onChange={handleInputUsuarioTelefone}
                            />

                            <input type="text"
                                name="user-name"
                                placeholder="nome@email.com"
                                value={usuarioEmail}
                                required
                                onChange={handleInputUsuarioEmail}
                            />

                            <input type="password"
                                name="user-password"
                                placeholder="Crie Sua Senha"
                                value={usuarioSenha}
                                required
                                onChange={handleInputUsuarioSenha}
                            />

                            <input type="password"
                                name="user-password"
                                placeholder="Confirme Sua Senha"
                                value={usuarioSenhaConfirmar}
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
                            {loading && 
                                <Button
                                    color="primary"
                                    disabled
                                >
                                    <Spinner type="border"size="sm">
                                        Carregando...
                                    </Spinner>
                                </Button>
                            }
                            
                            {!loading &&
                                <button type="button" onClick={handleCriarConta}> Cadastrar-Se </button>
                            }
                            
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