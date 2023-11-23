import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

function RegistroPJ(){
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
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default RegistroPJ