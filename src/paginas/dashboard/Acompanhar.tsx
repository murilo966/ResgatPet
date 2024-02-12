import MenuLateral from '../../components/menu-lateral';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Acompanhar() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    // USER EFFECT PARA INICIO IMEDIATO 
    useEffect(() => {
        // VERICIAR SE O LEVEL E MAIOR QUE ZERO
        if (auth.user && auth.user.level === 0 || auth.user && auth.user.level === 2) {
            // REDIRECIONAR PARA DASHBOARD
            navigate('/dashboard')
        }
    }, [])

    if (auth.user && auth.user.level === 1) {
        return (
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />
                    <div className='container-painel'>
                        <h1>Acompanhar</h1>
                        <div className='tabela-acompanhar'>
                            <label> TABELA DOS PETS ENVIADOS</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default Acompanhar;
