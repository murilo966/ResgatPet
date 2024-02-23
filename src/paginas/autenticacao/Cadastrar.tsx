import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';

function Cadastrar(){
    const navigate = useNavigate();
    
    const usuarioLevel = '1';
    const OngLevel = '2';

    const [messageErro, SetMessageErro] = useState('');
    const [messageOk, SetMessageOk] = useState('');

    const [usuarioNome, SetUsuarioNome] = useState('');
    const [usuarioCNPJ, SetUsuarioCNPJ] = useState('');
    const [usuarioCPF, SetUsuarioCPF] = useState('');
    const [usuarioTelefone, SetUsuarioTelefone] = useState('');
    const [usuarioEmail, SetUsuarioEmail] = useState('');
    const [usuarioSenha, SetUsuarioSenha] = useState('');
    const [usuarioConfirmarSenha, SetUsuarioConfirmarSenha] = useState('');
    const [aceitarTermosPJ, SetAceitarTermosPJ] = useState(false);
    const [aceitarTermosCPF, SetAceitarTermosCPF] = useState(false);

    function handleInputUsuarioNome (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioNome(event.target.value);             
    }

    function handleInputUsuarioCPF (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioCPF(event.target.value);             
    }

    function handleInputUsuarioCNPJ (event: React.ChangeEvent< HTMLInputElement >) {
        SetUsuarioCNPJ(event.target.value);             
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

    const handleInputAceitarTermosPJ = () => {
        SetAceitarTermosPJ(!aceitarTermosPJ);
    }

    const handleInputAceitarTermosCPF = () => {
        SetAceitarTermosCPF(!aceitarTermosCPF);
    }

    // ANIMAÇÃO DO LOGIN
    const handleBotaoAnimacaoLogin = () => {
        const container = document.getElementById('autenticacao');
        if (container) {
          container.classList.add('active');
        }
    }
    
    // ANIMAÇÃO DO CRIAR CONTA
    const handleBotaoAnimacaoCadastrar = () => {
        const container = document.getElementById('autenticacao');
        if (container) {
          container.classList.remove('active');
        }
    }

    async function handleCriarContaPJ (){
        const response = await api.CriarConta(usuarioNome, usuarioCNPJ, usuarioTelefone, usuarioEmail, usuarioSenha, OngLevel)

        if (usuarioNome && usuarioCNPJ && usuarioTelefone && usuarioEmail && usuarioSenha) {
            try {
                handleBotaoAnimacaoCadastrar()
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

    async function handleCriarContaPF (){
        const response = await api.CriarConta(usuarioNome, usuarioCPF, usuarioTelefone, usuarioEmail, usuarioSenha, usuarioLevel)

        if (usuarioNome && usuarioCPF && usuarioTelefone && usuarioEmail && usuarioSenha) {
            try {
                handleBotaoAnimacaoCadastrar()
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

    return(
        <div>
            <div className='container'>
                <div className='container-autenticacao' id='autenticacao'>
                    <div className='form-container criar-conta-pf'>
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
                                
                            <button type="button" name='entrar' onClick={handleCriarContaPF}> Cadastrar-Se </button> 
                        </form>
                    </div>

                    <div className='form-container criar-conta-pj'>
                        <form>
                            <h1>CRIE SUA CONTA CORPORATIVA</h1>
                            
                            <input type="text" 
                                name="user-name" 
                                placeholder="Nome Empresa" 
                                required
                                onChange={handleInputUsuarioNome}
                             />

                            <input type="text" 
                                name="user-cnpj" 
                                placeholder="CNPJ" 
                                required
                                onChange={handleInputUsuarioCNPJ}
                            />

                            <input type="text" 
                                name="user-telefone" 
                                placeholder="Telefone" 
                                required
                                onChange={handleInputUsuarioTelefone}
                             />

                            <input type="text" 
                                name="user-email" 
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
                                        name="aceitar-termos-pj" 
                                        checked={aceitarTermosPJ}
                                        onChange={handleInputAceitarTermosPJ}
                                    /> 
                                </div>
                                <Link to='#'>
                                    <label>aceitar os termos</label>
                                </Link>
                            </div>
                                
                            <button type="button" name='entrar' onClick={handleCriarContaPJ}> Cadastrar-Se </button>
                        </form>
                    </div>

                    <div className='toggle-container'>
                        <div className='toggle'>
                            <div className="toggle-panel toggle-left">
                                <h1>Criar Sua Conta</h1>

                                <p> Crie sua conta, e venha fazer parte da nossa Familia !</p>

                                <button type="button" className='hidden' onClick={handleBotaoAnimacaoCadastrar} > Criar Sua Conta </button>
                            </div>

                            <div className="toggle-panel toggle-right">
                                <h1>Criar Sua Conta Corporativa</h1>

                                <p> Crie uma conta Corporativa com o seu CNPJ, e venha ajudar a Resgatar os Pets</p>

                                <button type="button" className='hidden' onClick={handleBotaoAnimacaoLogin} > Crie Sua Conta Corporativa </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    )
}

export default Cadastrar