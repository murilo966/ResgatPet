import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useState } from 'react';

function Formulario(){

    const [petCorAtivado, setPetCorAtivado] = useState(false);
    const [bemEstarAtivado, setBemEstarAtivado] = useState(false);
    const [petEndereco, SetPetEndereco] = useState('');
    const [petSexo, SetSexo] = useState('');    

    function handleInputPetEndereco (event: React.ChangeEvent< HTMLInputElement >) {
        SetPetEndereco(event.target.value);        
    }

    function handleInputPetSexo (event: React.ChangeEvent< HTMLInputElement >) {
        if (event.target.checked){
            SetSexo(event.target.value);  
        }                  
    }

    function handleClickSalvar(){
        alert(
            "Endereço: " + petEndereco +
            "\nSexo: " + petSexo +
            "\nSalvo com Sucesso!"
        )
    }

    const handleCheckboxChange = () => {
        setBemEstarAtivado(!bemEstarAtivado);
    };

    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                <div className='container-formulario'>
                    <div className='dados-pessoais'>
                        <div className='titulo-formulario'>
                            <label>Dados Pessoais</label>
                        </div>
                        
                        <div className='nome-usuario-formulario'>
                            <label id='label-formulario'>Seu Nome</label>
                            <input id='input' type="text" name="user-name" disabled/>
                        </div>

                        <div className='container-telefone-email'>
                            <div className='coluna-usuario'>
                                <label id='label-formulario'>Telefone</label>
                                <input id='input' type="tel" name="user-tel" disabled/>
                            </div>

                            <div className='coluna-usuario'>
                                <label id='label-formulario'>E-Mail</label>
                                <input id='input' type="email" name="user-email" disabled/>
                            </div>
                        </div> 
                    </div>

                    <div className='dados-pet'>
                        <div className='container-pet-econtroado'>
                            <div className='titulo-formulario'>
                                <label>Pet Econtrado</label>
                            </div>
                            <div className='pet'>
                                <div className='foto-pet'>
                                    <label> Foto Do Pet</label>                                
                                </div>
                            </div>

                            <div className='endereco-pet'>
                                <label id='label-formulario'>Endereço na onde foi encontrado o Pet </label>
                                <input id='input' type="text" name="pet-endereco" value={petEndereco} onChange={handleInputPetEndereco}/>
                            </div>
                        </div>

                        <div className='container-pet-sexo'>
                            <div className='titulo-formulario'>
                                <label>Sexo</label>
                            </div>

                            <div className="sexo-pet">
                                <div className='sexo-macho'>
                                    <input id='radios' type="radio" name="radio" checked={petSexo === 'Macho'} value="Macho" onChange={handleInputPetSexo}/>
                                    <label>Macho </label>  
                                </div>
    
                                <div className='sexo-femea'>
                                    <input id='radios' type="radio" name="radio" checked={petSexo === 'Fêmea'} value="Fêmea" onChange={handleInputPetSexo}/>
                                    <label>Fêmea </label>
                                </div>
                            </div>
                        </div>

                        <div className='container-pet-cor'>
                            <div className='titulo-formulario'>
                                <label>Cor</label>
                            </div>

                            <div className="pet-cor">
                                <div className='coluna-1'>
                                    <input id='radios' type="radio" name="radio" value="Preto" onChange={() => setPetCorAtivado(false)} />
                                    <label>Preto </label>    
                                    
                                    <input id='radios' type="radio" name="radio" value="Branco" onChange={() => setPetCorAtivado(false)} />
                                    <label>Branco </label>
                                    
                                    <input id='radios' type="radio" name="radio" value="Cinza" onChange={() => setPetCorAtivado(false)} />
                                    <label>Cinza </label>

                                    <input id='radios' type="radio" name="radio" value="Vermelho" onChange={() => setPetCorAtivado(false)} />
                                    <label>Vermelho </label>
                                    
                                    <input id='radios' type="radio" name="radio" value="Creme" onChange={() => setPetCorAtivado(false)} />
                                    <label>Creme </label>  
                                </div>

                                <div className='coluna-2'>
                                    <input id='radios' type="radio" name="radio" value="Marrom" onChange={() => setPetCorAtivado(false)} />
                                    <label>Marrom </label>
                                    
                                    <input id='radios' type="radio" name="radio" value="Caramelo" onChange={() => setPetCorAtivado(false)} />
                                    <label>Caramelo </label>

                                    <input id='radios' type="radio" name="radio" value="Outros" onChange={() => setPetCorAtivado(true)} />
                                    <label>Outros </label>
                                    <input id='input-outros' type="text" name="outra-cor" disabled={!petCorAtivado} />
                                </div>
                            </div>
                        </div>

                        <div className='container-pet-acessorios'>
                            <div className='titulo-formulario'>
                                <label>Acessórios</label>
                            </div>

                            <div className='pet-acessorio'>
                                <div className='coluna-1'>
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Coleira </label>
                                    
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Corrente / Guia </label>
                                    
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Focinheira </label>
                                </div> 
                            </div>
                        </div>

                        <div className='container-pet-bem-estar'>
                            <div className='titulo-formulario'>
                                <label>Bem Estar do Pet</label>
                            </div>

                            <div className='pet-bem-estar'>
                                <div className='coluna-1'>
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Assustado </label>
                                    
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Ferido </label>
                                    
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Doente </label>

                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Alegre </label>
                                </div>                          

                                <div className='coluna-2'>
                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Agressivo </label>

                                    <input id='checkbox' type="checkbox" name='checkbox' />
                                    <label>Calmo </label>

                                    <input id='checkbox' type="checkbox" name='checkbox' onChange={handleCheckboxChange}/>
                                    <label>outros </label>
                                    <input id='input-outros' type="text" name='text-outros' disabled={!bemEstarAtivado}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pet-cadastro'>
                        <div className='bt-salvar-pet'>
                            <Link to='#'>
                                <button onClick={handleClickSalvar} id='bt-salvar' type="button" name='salvar'> Salvar </button>
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