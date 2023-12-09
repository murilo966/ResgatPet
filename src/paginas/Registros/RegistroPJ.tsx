import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RegistroPJ(){
    const navigate = useNavigate()
    function handleClick(){
        navigate(-1)
    }
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                <div className='container-pj'>
                <label>Conta Corporativa</label>
                    <div className='Conta-corporativa1'>
                        <input type="text" placeholder='Nome da Empresa'></input>
                        <input type="text" placeholder='CNPJ'></input>
                        <input type="text" placeholder='Inscrição Municipal'></input>
                        <input type="text" placeholder='Telefone'></input>
                    </div>

                    <div className='Conta-corporativa2'>
                        
                        <input type="text" placeholder='CEP'></input>
                        <input type="text" placeholder='Endereço'></input>
                        <input type="text" placeholder='Bairro'></input>
                        <input type="text" placeholder='Cidade'></input>
                        <input type="text" placeholder='Estado'></input>

                        <hr />
                        
                    </div>

                    <div className='cadastro-pj'>
                        
                        <input type="text" placeholder='E-mail'></input>
                        <input type="password" placeholder='Criar senha'></input>
                        <input type="password" placeholder='Confirmar senha'></input>

                        <div className='cadastro-checkbox'><input type="checkbox"></input> <p>aceitar os termos</p></div>

                        <div className='cadastro-botoes'>
                            <Link to ='/dashboard'><button className='botCadastrar'>Cadastrar</button></Link>
                            <div className='vazio'></div>
                            <button className='botCancelar' onClick={handleClick}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default RegistroPJ