import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='container-img'>
                <div className='home-container'>

                    <div className='titulo-encontrou-um-animal'>
                        <label>Encontrou um animal?</label>
                    </div>

                    <div className='detalhes'>
                        <label>Informe os detalhes no botão abaixo</label>
                    </div>

                    <div className='bt-formulario'>
                        <Link to='/dashboard/formulario'>
                            <button className='bt-encontrei-pet' >Encontrei um Pet</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home