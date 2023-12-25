import { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cadastrar(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();
    
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

    const handlePJClick = () => {
        const container = document.getElementById('autenticacao');
        if (container) {
          container.classList.add('active');
        }
    }
    
    const handlePFClick = () => {
        const container = document.getElementById('autenticacao');
        if (container) {
          container.classList.remove('active');
        }
    }

    function handleRegistarPJ (){
        if (usuarioNome.trim() === '' || 
            usuarioCNPJ.trim() === '' || 
            usuarioTelefone.trim() === '' || 
            usuarioEmail.trim() === ''|| 
            usuarioSenha.trim() === '' || 
            usuarioConfirmarSenha.trim() === ''){
            alert('Preencha todos os campos.');
        } else if(usuarioSenha !== usuarioConfirmarSenha){
            alert('As senha não são iguais.'); 
        } else if(!emailRegex.test(usuarioEmail)){
            alert('Forneça um e-mail válido.');
        } else if(!aceitarTermosPJ ){
            alert('Aceitar os Termos.');
        } else{
            alert(
                "\nUsuario: " + usuarioNome +
                "\nUsuario: " + usuarioCNPJ +
                "\nTelefone: " + usuarioTelefone +
                "\nE-Mail: " + usuarioEmail +
                "\nSenha: " + usuarioSenha
                )            

            navigate('/login');

            // salva os dados do usuario em memoria
            localStorage.setItem('usuarioNome', usuarioNome);
            localStorage.setItem('usuarioCNPJ', usuarioCNPJ);
            localStorage.setItem('usuarioTelefone', usuarioTelefone);
            localStorage.setItem('usuarioEmail', usuarioEmail);
            localStorage.setItem('usuarioSenha', usuarioSenha);
        }        
    }

    function handleRegistarPF (){
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
            localStorage.setItem('usuarioCPF', usuarioCPF);
            localStorage.setItem('usuarioTefone', usuarioTelefone);
            localStorage.setItem('usuarioEmail', usuarioEmail);
            localStorage.setItem('usuarioSenha', usuarioSenha);
        }        
    }

    return(
        <div>
            <Cabecalho/>

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
                                
                            <button type="button" name='entrar' onClick={handleRegistarPF}> Cadastrar-Se </button> 
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
                                
                            <button type="button" name='entrar' onClick={handleRegistarPJ}> Cadastrar-Se </button>
                        </form>
                    </div>

                    <div className='toggle-container'>
                        <div className='toggle'>
                            <div className="toggle-panel toggle-left">
                                <h1>Criar Sua Conta</h1>

                                <p> Crie sua conta, e venha fazer parte da nossa Familia !</p>

                                <button type="button" className='hidden' onClick={handlePFClick} > Criar Sua Conta </button>
                            </div>

                            <div className="toggle-panel toggle-right">
                                <h1>Criar Sua Conta Corpotativa</h1>

                                <p> Crie uma conta Corporativa com o seu CNPJ, e venha ajudar a Resgatar os Pets</p>

                                <button type="button" className='hidden' onClick={handlePJClick} > Crie Sua Conta Corporativa </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Rodape/>
        </div>
    )
}

export default Cadastrar