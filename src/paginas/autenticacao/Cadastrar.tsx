import { useState } from 'react';
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
                <div className='container-autenticacao'>
                    <div className='autenticacao'>
                        <div className='titulo-autenticacao'>
                            <label>CRIE SUA CONTA CORPORATIVA</label>
                        </div>
                        
                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-name" 
                                placeholder="Nome Empresa" 
                                required
                                onChange={handleInputUsuarioNome}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-cnpj" 
                                placeholder="CNPJ" 
                                required
                                onChange={handleInputUsuarioCNPJ}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-telefone" 
                                placeholder="Telefone" 
                                required
                                onChange={handleInputUsuarioTelefone}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-email" 
                                placeholder="nome@email.com" 
                                required
                                onChange={handleInputUsuarioEmail}
                            />
                        </div> 

                        <div className='input-autenticacao'>
                            <input type="password" 
                                name="user-password" 
                                placeholder="Crie Sua Senha"
                                required
                                onChange={handleInputUsuarioSenha}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="password" 
                                name="user-password" 
                                placeholder="Confirme Sua Senha"
                                required
                                onChange={handleInputUsuarioConfirmarSenha}
                            />
                        </div>

                        <div className='aceitar-termos'>
                            <input type="checkbox" 
                                name="aceitar-termos-pj" 
                                checked={aceitarTermosPJ}
                                onChange={handleInputAceitarTermosPJ}
                            />
                            <Link to='#'>
                                <label>aceitar os termos</label>
                            </Link>
                        </div>
                            
                        <div className='bt-autenticacao'>
                            <button type="button" name='entrar' onClick={handleRegistarPJ}> Cadastrar-Se </button>
                        </div>
                    </div>

                    <div className='autenticacao'>
                        <div className='titulo-autenticacao'>
                            <label>CRIE SUA CONTA</label>
                        </div>
                        
                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-name" 
                                placeholder="Nome Completo" 
                                required
                                onChange={handleInputUsuarioNome}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-cpf" 
                                placeholder="CPF" 
                                required
                                onChange={handleInputUsuarioCPF}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-telefone" 
                                placeholder="Telefone" 
                                required
                                onChange={handleInputUsuarioTelefone}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="text" 
                                name="user-name" 
                                placeholder="nome@email.com" 
                                required
                                onChange={handleInputUsuarioEmail}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="password" 
                                name="user-password" 
                                placeholder="Crie Sua Senha"
                                required
                                onChange={handleInputUsuarioSenha}
                            />
                        </div>

                        <div className='input-autenticacao'>
                            <input type="password" 
                                name="user-password" 
                                placeholder="Confirme Sua Senha"
                                required
                                onChange={handleInputUsuarioConfirmarSenha}
                            />
                        </div>

                        <div className='aceitar-termos'>
                            <input type="checkbox" 
                                name="aceitar-termos-pf" 
                                checked={aceitarTermosCPF}
                                onChange={handleInputAceitarTermosCPF}
                            />
                            <Link to='#'>
                                <label>aceitar os termos</label>
                            </Link>
                        </div>
                            
                        <div className='bt-autenticacao'>
                            <button type="button" name='entrar' onClick={handleRegistarCPF}> Cadastrar-Se </button>
                        </div>
                    </div>
                </div>
            </div>

            <Rodape/>
        </div>
    )
}

export default Cadastrar