import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

function handleClick(){
    alert("Salvo com Sucesso!")
}

function Formulario(){
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                <div className='container-formulario'>
                    <div className='dados-pessoais'>
                        <div className='titulo-formulario'>
                            <label>Dados Pessoais</label>
                        </div>
                        
                        <div className='nome-usuario'>
                            <input type="text" name="user-name"/>
                        </div>

                        <div className='telefone-email'>
                            <div className='telefone-usuario'>
                                <input type="tel" name="user-tel"/>
                            </div>

                            <div className='email-usuario'>
                                <input type="email" name="user-email"/>
                            </div>
                        </div> 
                    </div>

                    <div className='dados-pet'>
                        <div className='titulo-formulario'>
                            <label>Pet Econtrado</label>
                        </div>
                        <div className='pet'>
                            <div className='foto-pet'>
                                <label> Foto Do Pet</label>
                            </div>

                            <div className='upload-pet'>
                                <input type="file" name="arquivos" />
                            </div>
                        </div>

                        <div className='endereco-pet'>
                            <label>Endereço na onde foi encontrado o Pet </label>
                            <input type="text" name="pet-endereco"/>
                        </div>

                        <div className='titulo-formulario'>
                            <label>Sexo</label>
                        </div>

                        <div className="sex-pet">                            
                            <input type="radio" name="radio"/>
                            <label>Macho </label>    
                            
                            <input type="radio" name="radio"/>
                            <label>Femêa </label>
                        </div>

                        <div className='titulo-formulario'>
                            <label>Cor</label>
                        </div>

                        <div className="cor-pet">                            
                            <input type="radio" name="radio"/>
                            <label>Preto </label>    
                            
                            <input type="radio" name="radio"/>
                            <label>Branco </label>
                            
                            <input type="radio" name="radio"/>
                            <label>Cinza </label>
                           
                            <input type="radio" name="radio"/>
                            <label>Marrom </label>
                            
                            <input type="radio" name="radio"/>
                            <label>Caramelo </label>

                            <input type="radio" name="radio"/>
                            <label>Outros </label>
                            <input type="text" name="outra-cor"/>
                        </div>

                        <div className='titulo-formulario'>
                            <label>Acessórios</label>
                        </div>

                        <div className='pet-acessorio'>                            
                            <input type="checkbox" name='checkbox' />
                            <label>Coleira </label>
                            
                            <input type="checkbox" name='checkbox' />
                            <label>Corrente / Guia </label>
                            
                            <input type="checkbox" name='checkbox' />
                            <label>Focinheira </label>
                        </div>

                        <div className='titulo-formulario'>
                            <label>Bem Estar do Pet</label>
                        </div>

                        <div className='pet-bem-estar'>                            
                            <input type="checkbox" name='checkbox' />
                            <label>Assustado </label>
                            
                            <input type="checkbox" name='checkbox' />
                            <label>Ferido </label>
                            
                            <input type="checkbox" name='checkbox' />
                            <label>Doente </label>

                            <input type="checkbox" name='checkbox' />
                            <label>Alegre </label>

                            <input type="checkbox" name='checkbox' />
                            <label>Agressivo </label>

                            <input type="checkbox" name='checkbox' />
                            <label>Calmo </label>

                            <input type="checkbox" name='checkbox' />
                            <label>outros </label>
                            <input type="text" name='text-outros' />
                        </div>
                    </div>

                    <div className='pet-cadastro'>
                        <div className='bt-salvar-pet'>
                            <Link to='#'>
                                <button onClick={handleClick} id='bt-salvar' type="button" name='salvar'> Salvar </button>
                            </Link>
                        </div>

                        <div className='bt-cancelar-pet'>
                            <Link to='#'>
                                <button id='bt-cancelar' type="button" name='cancelar'> Cancelar </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default Formulario