import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

function NotFound(){
    return(
        <div>
            <Cabecalho/>
            <div>
                <p>Página not Found, Erro 404 </p>
            </div>
            <Rodape/>
        </div>
    )
}

export default NotFound