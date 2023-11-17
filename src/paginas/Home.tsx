import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

function Home() {
    return(
        <div>
            <Cabecalho/>
                <div className='bod_container'>
                    <h1>Encontrou um animal?</h1>
                    <p>Informe os detalhes no botão abaixo</p>
                    <button className='form_button'>Nos passe as informações</button>
                </div>
            <Rodape/>
            
        </div>

    )
}
export default Home