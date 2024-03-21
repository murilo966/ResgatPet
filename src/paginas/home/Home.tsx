import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsuarioLogadoContext } from '../../context/authContext';

function Home() {
    const auth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate()

    const handleFormulario = () => {
        if(!auth){
            navigate('/dashboard/formulario')
        }
        else{
            navigate('/login')
        }
    }

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
                        <button className='bt-encontrei-pet' onClick={handleFormulario}>Encontrei um Pet</button>
                    </div>
                </div>
            </div>
            <div className='CarrosselImages'>
                <div className="slide"><img src="https://t.ctcdn.com.br/yqCkdE2L6bLSUXdITF1QElZEzGU=/640x360/smart/i726432.jpeg"/></div>
                <div className="slide"><img src="imagem2.jpg"/></div>
                <div className="slide"><img src="imagem3.jpg"/></div>

            </div>
        </div>
    )
}
export default Home