import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';
import Cabecalho2 from '../components/cabecalho2';

function QuemSomos(){
    return(
        <div>
            <Cabecalho2/>
            <div className='container'>
                <p>QUEM SOMOS</p>
            </div>
            <Rodape/>
        </div>
    )
}

export default QuemSomos