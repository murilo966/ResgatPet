import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

function QuemSomos(){
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                <p>QUEM SOMOS</p>
            </div>
            <Rodape/>
        </div>
    )
}

export default QuemSomos