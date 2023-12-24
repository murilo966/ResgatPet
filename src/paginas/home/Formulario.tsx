import { Link} from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import { useState } from 'react';
import petImageLogo from '../../assents/imagens/logo/ic_resgatpet.png';

function Formulario() {

    // dados usuario
    const usuarioNome = localStorage.getItem('usuarioNome') ?? "";
    const usuarioTelefone = localStorage.getItem('usuarioTelefone') ?? "";
    const usuarioEmail = localStorage.getItem('usuarioEmail') ?? "";

    // dados pet
    const [petEndereco, SetPetEndereco] = useState('');
    const [petSexo, SetPetSexo] = useState('');
    const [petCor, SetPetCor] = useState('');
    const [petAcessorios, SetPetAcessorios] = useState<string[]>([]);
    const [petBemEstar, SetPetBemEstar] = useState<string[]>([]);

    const [petCorOutros, SetPetCorOutros] = useState('');
    const [petBemEstarOutros, SetPetBemEstarOutros] = useState('');
    const [petBemEstarCheck, SetPetBemEstarCheck] = useState(false);

    const [petImage, SetPetImage] = useState<string>('');
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
    
        if (file && file.type.startsWith('image/')) {
          SetPetImage(URL.createObjectURL(file));
        } else {          
          alert('Por favor, selecione uma imagem válida.');
        }
    }

    function handleInputPetEndereco (event: React.ChangeEvent< HTMLInputElement >) {
        SetPetEndereco(event.target.value);        
    }

    function handleInputPetSexo (event: React.ChangeEvent< HTMLInputElement >) {
        if (event.target.checked){
            SetPetSexo(event.target.value);  
        }
    }

    function handleInputPetCor (event: React.ChangeEvent< HTMLInputElement >) {
        if (event.target.checked){
            SetPetCor(event.target.value);  
        }

        // Limpa o campo texto ao selecionar outros radio
        SetPetCorOutros('')
    }

    function handleInputPetCorOutros (event: React.ChangeEvent< HTMLInputElement >) {        
        SetPetCorOutros(event.target.value);
    } 

    const handleInputPetAcessorios = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
    
        if (checked) {
          // Se marcado, adiciona à lista
          SetPetAcessorios((prevAcessorios) => [...prevAcessorios, name]);
        } else {
          // Se desmarcado, remove da lista
          SetPetAcessorios((prevAcessorios) => prevAcessorios.filter((item) => item !== name));
        }
    }
  
    const handleInputPetBemEstar = (event: React.ChangeEvent<HTMLInputElement>) => {
          const { name, checked } = event.target;
    
          if (checked) {
            SetPetBemEstar((prevBemEstar) => [...prevBemEstar, name]);
          } else {
            SetPetBemEstar((prevBemEstar) => prevBemEstar.filter((item) => item !== name));
          }
    }

    function handleInputPetBemEstarOutros (event: React.ChangeEvent< HTMLInputElement >) {
        SetPetBemEstarOutros(event.target.value)
    } 

    const handlePetBemEstarOutros = () => {
        SetPetBemEstarCheck(!petBemEstarCheck);

        if (petBemEstarCheck) {
            SetPetBemEstarOutros('')
        }
    }

    function handleClickSalvar(){
        alert(
            "\nNome Usuario: " + usuarioNome +
            "\nTelefone: " + usuarioTelefone +
            "\nE-Mail: " + usuarioEmail +
            "\nPet Foto: " + petImage +
            "\nEndereço: " + petEndereco +
            "\nSexo: " + petSexo +
            "\nCor: " + petCor + ": " + petCorOutros +
            "\nAcessorios: " + petAcessorios +
            "\nBem Estar: " + petBemEstar + "," + petBemEstarOutros +
            "\nSalvo com Sucesso!"
        )
    }

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
                            <input id='input' type="text" 
                                name="user-name" 
                                value={usuarioNome} 
                                disabled
                            />
                        </div>

                        <div className='container-telefone-email'>
                            <div className='coluna-usuario'>
                                <label id='label-formulario'>Telefone</label>
                                <input id='input' type="tel" 
                                    name="user-tel" 
                                    value={usuarioTelefone} 
                                    disabled
                                />
                            </div>

                            <div className='coluna-usuario'>
                                <label id='label-formulario'>E-Mail</label>
                                <input id='input' type="email" 
                                    name="user-email" 
                                    value={usuarioEmail} 
                                    disabled
                                />
                            </div>
                        </div> 
                    </div>

                    <div className='dados-pet'>
                        <div className='container-pet-econtroado'>
                            <div className='titulo-formulario'>
                                <label>Pet Econtrado</label>
                            </div>
                            <div className='pet'>
                                <div className='foto-pet' >
                                    <img src={petImage || petImageLogo} /> 
                                </div>    
                            </div>

                            <div className='update-imagem'>
                                <input type="file" onChange={handleImageChange} accept="image/*"/>
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
                                    <input id='radios' type="radio" name="sexo-macho" checked={petSexo === 'Macho'} value="Macho" onChange={handleInputPetSexo}/>
                                    <label>Macho </label>  
                                </div>
    
                                <div className='sexo-femea'>
                                    <input id='radios' type="radio" name="sexo-femea" checked={petSexo === 'Fêmea'} value="Fêmea" onChange={handleInputPetSexo}/>
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
                                    <input id='radios' type="radio" name="cor-preto" checked={petCor === 'Preto'} value="Preto" onChange={handleInputPetCor} />
                                    <label>Preto </label>    
                                    
                                    <input id='radios' type="radio" name="cor-branco" checked={petCor === 'Branco'} value="Branco" onChange={handleInputPetCor} />
                                    <label>Branco </label>
                                    
                                    <input id='radios' type="radio" name="cor-cinza" checked={petCor === 'Cinza'} value="Cinza" onChange={handleInputPetCor} />
                                    <label>Cinza </label>

                                    <input id='radios' type="radio" name="cor-vermelho" checked={petCor === 'Vermelho'} value="Vermelho" onChange={handleInputPetCor} />
                                    <label>Vermelho </label>
                                    
                                    <input id='radios' type="radio" name="cor-creme" checked={petCor === 'Creme'} value="Creme" onChange={handleInputPetCor} />
                                    <label>Creme </label>  
                                </div>

                                <div className='coluna-2'>
                                    <input id='radios' type="radio" name="cor-marrom" checked={petCor === 'Marrom'} value="Marrom" onChange={handleInputPetCor} />
                                    <label>Marrom </label>
                                    
                                    <input id='radios' type="radio" name="cor-caramelo" checked={petCor === 'Caramelo'} value="Caramelo" onChange={handleInputPetCor} />
                                    <label>Caramelo </label>

                                    <input id='radios' type="radio" name="cor-outros" checked={petCor === 'Outros'} value="Outros" onChange={handleInputPetCor} />
                                    <label>Outros </label>
                                    <input id='input-outros' type="text" name="outra-cor" value={petCorOutros} disabled={petCor != "Outros"} onChange={handleInputPetCorOutros} />
                                </div>
                            </div>
                        </div>

                        <div className='container-pet-acessorios'>
                            <div className='titulo-formulario'>
                                <label>Acessórios</label>
                            </div>

                            <div className='pet-acessorio'>
                                <div className='coluna-1'>
                                    <input id='checkbox' type="checkbox" name='coleira' onChange={handleInputPetAcessorios} />
                                    <label>Coleira </label>
                                    
                                    <input id='checkbox' type="checkbox" name='corrente-guia' onChange={handleInputPetAcessorios} />
                                    <label>Corrente / Guia </label>
                                    
                                    <input id='checkbox' type="checkbox" name='focinheira' onChange={handleInputPetAcessorios} />
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
                                    <input id='checkbox' type="checkbox" name='assustado' onChange={handleInputPetBemEstar}/>
                                    <label>Assustado </label>
                                    
                                    <input id='checkbox' type="checkbox" name='ferido' onChange={handleInputPetBemEstar}/>
                                    <label>Ferido </label>
                                    
                                    <input id='checkbox' type="checkbox" name='doente' onChange={handleInputPetBemEstar}/>
                                    <label>Doente </label>

                                    <input id='checkbox' type="checkbox" name='alegre' onChange={handleInputPetBemEstar}/>
                                    <label>Alegre </label>
                                </div>                          

                                <div className='coluna-2'>
                                    <input id='checkbox' type="checkbox" name='agressivo' onChange={handleInputPetBemEstar}/>
                                    <label>Agressivo </label>

                                    <input id='checkbox' type="checkbox" name='calmo' onChange={handleInputPetBemEstar}/>
                                    <label>Calmo </label>

                                    <input id='checkbox' type="checkbox" name='outros' checked={petBemEstarCheck} onChange={handlePetBemEstarOutros}/>
                                    <label>Outros </label>
                                    <input id='input-outros' type="text" name='text-outros' value={petBemEstarOutros} disabled={!petBemEstarCheck} onChange={handleInputPetBemEstarOutros}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pet-cadastro'>
                        <div className='bt-salvar-pet'>
                            <Link to='#'>
                                <button id='bt-salvar' type="button" name='salvar' onClick={handleClickSalvar} > Salvar </button>
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