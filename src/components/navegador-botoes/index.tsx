import logo from '../../assents/imagens/logo/ic_resgatpet.png'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/AuthContext'

function Menu() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    const handleQuemSomos = () =>{
        navigate('/quem-somos')
    }

    const handleCadastrar = () =>{
        navigate('/cadastrar')
    }

    const hadleDashboard = () =>{
        navigate('/dashboard')
    }
    
    const handleLogout = async () => {
        await auth.signout();
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

                    {!auth.user && <button onClick={handleCadastrar}>Cadastre-se</button>}

                    {auth.user && <button onClick={hadleDashboard}>Dashboard</button>}

                    {auth.user && <button onClick={handleLogout}>Sair</button>}

                    {!auth.user &&<button onClick={handleLogin}>Faça login</button>}
                </div>
            </div>
        </div>
    )
    
}

export default Menu