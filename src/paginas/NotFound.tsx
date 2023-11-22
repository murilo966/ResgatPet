import Rodape from '../components/rodape';
import Cabecalho2 from '../components/cabecalho2';

function NotFound(){
    return(
        <div>
            <Cabecalho2/>
            <div>
                <p>Página not Found, Erro 404 </p>
            </div>
            <Rodape/>
        </div>
    )
}

export default NotFound