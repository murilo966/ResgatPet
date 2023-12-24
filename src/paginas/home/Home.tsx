import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

function Home() {
    return(
        <div>
            <Cabecalho/>
                <div className='container-img'>
                    <div className='home-container'>

                        <div className='titulo-encontrou-um-animal'>
                            <label>Encontrou um animal?</label>
                        </div>
                        
                        <div className='detalhes'>
                            <label>Informe os detalhes no botão abaixo</label>
                        </div>

                        <div className='bt-formulario'>
                            <Link to='/formulario'>
                                <button className='bt-encontrei-pet' >Encontrei um Pet</button>
                            </Link>
                        </div>  
                    </div>
                </div>
            <Rodape/>
        </div>
    )
}
export default Home