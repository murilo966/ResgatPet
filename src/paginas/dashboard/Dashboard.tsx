import { useContext } from 'react';
import MenuLateral from '../../components/menu-lateral';
import { Link } from 'react-router-dom';
import { UsuarioLogadoContext } from '../../context/authContext';

function Dasboard() {
    // const auth = useContext(AuthContext)
    // const levelUsuario = auth.user && auth.user.level === 1;
    // const levelOng = auth.user && auth.user.level === 2;

    const usuarioContext = useContext(UsuarioLogadoContext)

    return (
        <div>
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />

                    <div className='container-painel'>
                        <div className='container-bem-vindo'>
                            <h3>Olá, Bem-Vindo:</h3>
                            <label>{usuarioContext?.nome}</label>                         
                        </div>

                        <div className='painel'>
                            <div className='card'>
                                <Link to='apadrinhar'>
                                    {/* LEVEL 1 USUARIO */}
                                    {/* {(levelUsuario) && */
                                        <div className='card-01 cards cards-mobile'>
                                            <label className='card-titulo'>Apadrinhar</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='resgatar-pet'>
                                    {/* LEVEL 2 ONG */}
                                    {/* {(levelOng) && */
                                        <div className='card-02 cards cards-mobile'>
                                            <label className='card-titulo'>Resgatar</label>
                                        </div>
                                    }
                                </Link>  

                                <Link to='acompanhar'>
                                    {/* {(levelUsuario) && */
                                        <div className='card-02 cards cards-mobile'>
                                            <label className='card-titulo'>Acompanhar</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='formulario'>
                                    {/* {(levelUsuario) && */
                                        <div className='card-03 cards cards-mobile'>
                                            <label className='card-titulo'>Encontrei Pet</label>
                                        </div>
                                    }
                                </Link>

                                <Link to="acolhidos">
                                    <div className='card-04 cards cards-mobile'>
                                        <label className='card-titulo'>Acolhidos</label>
                                    </div>
                                </Link>

                                <Link to='configuracoes'>
                                    {/* {(levelOng) && */
                                        <div className='card-08 cards cards-mobile'>
                                            <label className='card-titulo'>Configurações</label>
                                        </div>
                                    }
                                </Link>
                            </div>

                            <div className='card'>
                                <Link to='ongs'>
                                    {/* {(levelUsuario) && */
                                        <div className='card-05 cards cards-mobile'>
                                            <label className='card-titulo'>ONG`S</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='doacao'>
                                    {/* {(levelUsuario) && */
                                        <div className='card-06 cards cards-mobile'>
                                            <label className='card-titulo'>Doações</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='parceiros'>
                                    {/* {(levelUsuario) && */
                                        <div className='card-07 cards cards-mobile'>
                                            <label className='card-titulo'>Parceiros</label>
                                        </div>
                                    }
                                </Link>

                                <Link to='configuracoes'>
                                    {/* {(levelUsuario) && */
                                        <div className='card-08 cards cards-mobile'>
                                            <label className='card-titulo'>Configurações</label>
                                        </div>
                                    }
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