import { useNavigate } from 'react-router-dom';

function Home() {
    const auth = localStorage.getItem('ContextEmail')
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
        </div>
    )
}
export default Home