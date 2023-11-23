import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

function Formulario(){
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                <p>Esta é a Página do <b>formulário</b></p>
            </div>
            <Rodape/>
        </div>
    )
}

export default Formulario