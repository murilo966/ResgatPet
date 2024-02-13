import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import MenuLateral from '../../components/menu-lateral';
import { Link, useNavigate } from 'react-router-dom';

function Dasboard() {
    const auth = useContext(AuthContext)

    return (
        <div>
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />

                    <div className='container-painel'>
                        <div className='container-bem-vindo'>
                            <h3>Olá, Bem-Vindo:</h3>
                            <label>{auth.user?.name}</label>
                        </div>

                        <div className='painel'>
                            <div className='card'>
                                <Link to='apadrinhar'>
                                    {/* LEVEL 1 USUARIO */}
                                    {(auth.user?.level === 0 || auth.user?.level === 1) &&
                                        <div className='card-01 cards cards-mobile'>
                                            <label className='card-titulo'>Apadrinhar</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='resgatar-pet'>
                                    {/* LEVEL 2 ONG */}
                                    {(auth.user?.level === 0 || auth.user?.level === 2) &&
                                        <div className='card-02 cards cards-mobile'>
                                            <label className='card-titulo'>Resgatar</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='acompanhar'>
                                    {(auth.user?.level === 0 || auth.user?.level === 1) &&
                                        <div className='card-02 cards cards-mobile'>
                                            <label className='card-titulo'>Acompanhar</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='../formulario'>
                                    {(auth.user?.level === 0 || auth.user?.level === 1) &&
                                        <div className='card-03 cards cards-mobile'>
                                            <label className='card-titulo'>Encontrei Pet</label>
                                        </div>
                                    }
                                </Link>

                                <div className='card-04 cards cards-mobile'>
                                    <label className='card-titulo'>Lista de Pets</label>
                                </div>
                            </div>

                            <div className='card'>
                                <Link to='ongs'>
                                    {(auth.user?.level === 0 || auth.user?.level === 1) &&
                                        <div className='card-05 cards cards-mobile'>
                                            <label className='card-titulo'>ONG`S</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='doacao'>
                                    <div className='card-06 cards cards-mobile'>
                                        <label className='card-titulo'>Doações</label>
                                    </div>
                                </Link>

                                <Link to='parceiros'>
                                {(auth.user?.level === 0 || auth.user?.level === 1) &&
                                    <div className='card-07 cards cards-mobile'>
                                        <label className='card-titulo'>Parceiros</label>
                                    </div>
                                }
                                </Link>

                                <Link to='configuracoes'>
                                    <div className='card-08 cards cards-mobile'>
                                        <label className='card-titulo'>Configurações</label>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dasboard