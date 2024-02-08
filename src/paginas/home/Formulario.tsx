import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth/AuthContext';
import petImageLogo from '../../assents/imagens/logo/ic_resgatpet.png';

function Formulario() {

    const navigate = useNavigate();
    const auth = useContext(AuthContext)

    // DADOS DO PET
    const [petImage, SetPetImage] = useState<string>('');
    const [petEndereco, SetPetEndereco] = useState('');
    const [petCidade, SetPetCidade] = useState('');
    const [petSexo, SetPetSexo] = useState('');
    const [petRaca, SetPetRaca] = useState('');
    const [petCor, SetPetCor] = useState('');
    const [petAcessorios, SetPetAcessorios] = useState<string[]>([]);
    const [petSaude, SetPetSaude] = useState<string[]>([]);

    const [petRacaOutros, SetPetRacaOutros] = useState('');
    const [petCorOutros, SetPetCorOutros] = useState('');
    const [petSaudeOutros, SetPetSaudeOutros] = useState('');
    const [petSaudeCheck, SetPetSaudeCheck] = useState(false);

    // const [formulario, setFormulario] = useState<Pets[]>([])

    async function salvarPets() {
        try {
            const response = await fetch('https://resgat-pet-api.vercel.app/formulario', {
                method: 'POST',
                body: JSON.stringify({
                    fotoPet: petImage,
                    endereco: petEndereco,
                    cidade: petCidade,
                    raca: petRaca,
                    sexo: petSexo,
                    cor: petCor,
                    saude: petSaude.toString(),
                    acessorio: petAcessorios.toString(),
                    usuario: auth.user?.name,
                }),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });

            let json = await response.json()
            console.log(json)

            if (json.id) {
                alert('Dados salvos com sucesso:');
                // MOSTRAR A LISTA 
                // setFormulario((usuario) => [...usuario, json]);                 
            }
            else {
                alert('Ocorreu alguma falha');
            }

        } catch (e) {
            alert('Erro ao salvar pets:' + e);
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file && file.type.startsWith('image/')) {
            SetPetImage(URL.createObjectURL(file));
        } else {
            alert('Por favor, selecione uma imagem válida.');
        }
    }

    function handleInputPetCidade(event: React.ChangeEvent<HTMLInputElement>) {
        SetPetCidade(event.target.value);
    }

    function handleInputPetEndereco(event: React.ChangeEvent<HTMLInputElement>) {
        SetPetEndereco(event.target.value);
    }

    function handleInputPetSexo(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            SetPetSexo(event.target.value);
        }
    }

    function handleInputPetRaca(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            SetPetRaca(event.target.value);
        }

        // Limpa o campo texto ao selecionar outros radio
        SetPetRacaOutros('')
    }

    function handleInputPetRacaOutros(event: React.ChangeEvent<HTMLInputElement>) {
        SetPetRacaOutros(event.target.value);
    }

    function handleInputPetCor(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            SetPetCor(event.target.value);
        }

        // Limpa o campo texto ao selecionar outros radio
        SetPetCorOutros('')
    }

    function handleInputPetCorOutros(event: React.ChangeEvent<HTMLInputElement>) {
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
            SetPetSaude((prevBemEstar) => [...prevBemEstar, name]);
        } else {
            SetPetSaude((prevBemEstar) => prevBemEstar.filter((item) => item !== name));
        }
    }

    function handleInputPetBemEstarOutros(event: React.ChangeEvent<HTMLInputElement>) {
        SetPetSaudeOutros(event.target.value)
    }

    const handlePetBemEstarOutros = () => {
        SetPetSaudeCheck(!petSaudeCheck);

        if (petSaudeCheck) {
            SetPetSaudeOutros('')
        }
    }

    function handleClickSalvar() {
        alert(
            "\nNome Usuario: " + auth.user?.name +
            "\nTelefone: " + auth.user?.telefone +
            "\nE-Mail: " + auth.user?.email +
            "\nPet Foto: " + petImage +
            "\nCidade: " + petCidade +
            "\nEndereço: " + petEndereco +
            "\nSexo: " + petSexo +
            "\nRaca: " + petRaca + ": " + petRacaOutros +
            "\nCor: " + petCor + ": " + petCorOutros +
            "\nAcessorios: " + petAcessorios +
            "\nBem Estar: " + petSaude + "," + petSaudeOutros +
            "\nSalvo com Sucesso!"
        )
    }

    function handleClickCancelar() {
        navigate(-1);
    }

    return (
        <div>
            <div className='container'>
                <div className='container-formulario'>
                    <div className='dados-pessoais'>
                        <h1>Dados Pessoais</h1>

                        <label>Seu Nome</label>
                        <input type="text"
                            name="user-name"
                            value={auth.user?.name}
                            disabled
                        />

                        <div className="rows">
                            <div>
                                <label>E-Mail</label>
                                <input type="email"
                                    name="user-email"
                                    value={auth.user?.email}
                                    disabled
                                />
                            </div>
                            <div>
                                <label>Telefone</label>
                                <input type="tel"
                                    name="user-tel"
                                    value={auth.user?.telefone}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    <div className='dados-pet'>
                        <h1>Pet Econtrado</h1>
                        <div className="img-pet">
                            <img className='petimg' src={petImage || petImageLogo} />
                        </div>

                        <input type="file" onChange={handleImageChange} accept="image/*" />
                        <label > * Por Favor coloque o Endereço e a Cidade na onde foi encontrado o Pet </label>
                        <div className="rows">
                            <div>
                                <label>Endereço</label>
                                <input type="text" className='left' name="pet-endereco" placeholder='Endereço' value={petEndereco} onChange={handleInputPetEndereco} />
                            </div>

                            <div>
                                <label>Cidade</label>
                                <input type="text" name="pet-cidade" placeholder='Cidade' value={petCidade} onChange={handleInputPetCidade} />
                            </div>
                        </div>

                        <h1>Sexo</h1>
                        <div className="row">
                            <div>
                                <input className='radios' type="radio" name="sexo-macho" checked={petSexo === 'Macho'} value="Macho" onChange={handleInputPetSexo} />
                                <label>Macho </label>
                            </div>

                            <div>
                                <input className='radios' type="radio" name="sexo-femea" checked={petSexo === 'Fêmea'} value="Fêmea" onChange={handleInputPetSexo} />
                                <label>Fêmea </label>
                            </div>
                        </div>

                        <h1>Raça</h1>
                        <div className="column">
                            <div className="row">
                                <div>
                                    <input className='radios' type="radio" name="raca-poodle" checked={petRaca === 'Poodle'} value="Poodle" onChange={handleInputPetRaca} />
                                    <label>Poodle </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="raca-pitbull" checked={petRaca === 'Pitbull'} value="Pitbull" onChange={handleInputPetRaca} />
                                    <label>Pitbull </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="raca-chow" checked={petRaca === 'Chow Chow'} value="Chow Chow" onChange={handleInputPetRaca} />
                                    <label>Chow Chow </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="raca-bulldog" checked={petRaca === 'Bulldog'} value="Bulldog" onChange={handleInputPetRaca} />
                                    <label>Bulldog </label>
                                </div>
                            </div>

                            <div className="row">
                                <div>
                                    <input className='radios' type="radio" name="raca-srd" checked={petRaca === 'SRD'} value="SRD" onChange={handleInputPetRaca} />
                                    <label>SRD </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-outros" checked={petRaca === 'Outros'} value="Outros" onChange={handleInputPetRaca} />
                                    <label>Outros </label>
                                    <input className='outros' type="text" name="outra-cor" value={petRacaOutros} disabled={petRaca !== "Outros"} onChange={handleInputPetRacaOutros} />
                                </div>
                            </div>
                        </div>

                        <h1>Cor</h1>
                        <div className="column">
                            <div className="row">
                                <div>
                                    <input className='radios' type="radio" name="cor-preto" checked={petCor === 'Preto'} value="Preto" onChange={handleInputPetCor} />
                                    <label>Preto </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-branco" checked={petCor === 'Branco'} value="Branco" onChange={handleInputPetCor} />
                                    <label>Branco </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-cinza" checked={petCor === 'Cinza'} value="Cinza" onChange={handleInputPetCor} />
                                    <label>Cinza </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-vermelho" checked={petCor === 'Vermelho'} value="Vermelho" onChange={handleInputPetCor} />
                                    <label>Vermelho </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-creme" checked={petCor === 'Creme'} value="Creme" onChange={handleInputPetCor} />
                                    <label>Creme </label>
                                </div>
                            </div>

                            <div className="row">
                                <div>
                                    <input className='radios' type="radio" name="cor-marrom" checked={petCor === 'Marrom'} value="Marrom" onChange={handleInputPetCor} />
                                    <label>Marrom </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-caramelo" checked={petCor === 'Caramelo'} value="Caramelo" onChange={handleInputPetCor} />
                                    <label>Caramelo </label>
                                </div>

                                <div>
                                    <input className='radios' type="radio" name="cor-outros" checked={petCor === 'Outros'} value="Outros" onChange={handleInputPetCor} />
                                    <label>Outros </label>
                                    <input className='outros' type="text" name="outra-cor" value={petCorOutros} disabled={petCor !== "Outros"} onChange={handleInputPetCorOutros} />
                                </div>
                            </div>
                        </div>

                        <h1>Acessórios</h1>
                        <div className="column">
                            <div className="row">
                                <div>
                                    <input className='checkbox' type="checkbox" name='coleira' onChange={handleInputPetAcessorios} />
                                    <label>Coleira </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='corrente-guia' onChange={handleInputPetAcessorios} />
                                    <label>Corrente / Guia </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='focinheira' onChange={handleInputPetAcessorios} />
                                    <label>Focinheira </label>
                                </div>
                            </div>
                        </div>

                        <h1>Saúde</h1>
                        <div className="column">
                            <div className='row'>
                                <div>
                                    <input className='checkbox' type="checkbox" name='assustado' onChange={handleInputPetBemEstar} />
                                    <label>Assustado </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='ferido' onChange={handleInputPetBemEstar} />
                                    <label>Ferido </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='doente' onChange={handleInputPetBemEstar} />
                                    <label>Doente </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='alegre' onChange={handleInputPetBemEstar} />
                                    <label>Alegre </label>
                                </div>
                            </div>

                            <div className='row'>
                                <div>
                                    <input className='checkbox' type="checkbox" name='agressivo' onChange={handleInputPetBemEstar} />
                                    <label>Agressivo </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='calmo' onChange={handleInputPetBemEstar} />
                                    <label>Calmo </label>
                                </div>

                                <div>
                                    <input className='checkbox' type="checkbox" name='outros' checked={petSaudeCheck} onChange={handlePetBemEstarOutros} />
                                    <label>Outros </label>
                                    <input className='outros' type="text" name='text-outros' value={petSaudeOutros} disabled={!petSaudeCheck} onChange={handleInputPetBemEstarOutros} />
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className='row'>
                                <div>
                                    <button className='bt-salvar' type="button" name='salvar' onClick={salvarPets} > Salvar </button>
                                </div>

                                <div>
                                    <button className='bt-cancelar' type="button" name='cancelar' onClick={handleClickCancelar}> Cancelar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario