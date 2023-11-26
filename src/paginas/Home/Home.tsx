import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';


function Home() {
    return(
        <div>
            <Cabecalho/>
                <div className='bod-container'>
                    <h1>Encontrou um animal?</h1>
                    <p>Informe os detalhes no botão abaixo</p>

                    <Link to='/formulario'>
                        <button className='form_button'>Nos passe as informações</button>
                    </Link>
                    
                </div>
            <Rodape/>
            
        </div>

    )
}
export default Home