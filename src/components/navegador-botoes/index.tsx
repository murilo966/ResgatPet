import logo from '../../assents/imagens/logo/ic_resgatpet.png'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UsuarioLogadoContext } from '../../context/authContext'

function Menu() {
    const auth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    const handleQuemSomos = () =>{
        navigate('/quem-somos')
    }

    const hadleDashboard = () =>{
        navigate('/dashboard')
    }
    
    const handleLogout = async () => {
        // await auth.signout();
        navigate('/')
    }

    const handleLogin = () =>{
        navigate('/login')
    }

    return(
        <div className='container-cabecalho'>
            <div className='cabecalho'>
                <div className='menu-logo'>
                    <Link to='/'>
                        <img src={logo} onClick={handleHome} />
                    </Link> 
                </div>

                <div className='container-navegacao'>
                    <button onClick={handleHome}>Inicio </button>

                    <button onClick={handleQuemSomos}>Quem Somos</button>

                    {/* {auth.user && <button onClick={hadleDashboard}>Dashboard</button>}

                    {auth.user && <button onClick={handleLogout}>Sair</button>}

                    {!auth.user &&<button onClick={handleLogin}>Faça login</button>} */}

                    <button onClick={hadleDashboard}>Dashboard</button>                    

                    <button onClick={handleLogin}>Faça login</button>

                    <button onClick={handleLogout}>Sair</button>
                </div>
            </div>
        </div>
    )
    
}

export default Menu