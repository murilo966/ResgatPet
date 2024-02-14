import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import logo from '../../assents/imagens/logo/ic_resgatpet.png'

function MenuLateral() {

    const auth = useContext(AuthContext)
    const [menuPet, setMenuPet] = useState(false)
    const [menuInst, setMenuInst] = useState(false)
    const levelUsuario = auth.user?.level === 0 || auth.user?.level === 1;
    const levelOng = auth.user?.level === 0 || auth.user?.level === 2;

    const handleMenuPet = () => {
        setMenuPet(!menuPet)
    }

    const handleMenuInst = () => {
        setMenuInst(!menuInst)
    }

    return (
        <div className='container-menu'>
            <Link to='/dashboard/configuracoes'>
                <img src={logo} alt="imagem-usuario" />
            </Link>
            <label>{auth.user?.name}</label>


            <div className="botoes-menus">
                <Link to='/dashboard'>
                    <button
                        type="button"
                    >
                        <span className='icon ic-dashboard' />
                        Dashboard
                    </button>

                </Link>

                {
                    // SOMENTE O USUARIO TEM ACESSO AO BOTAO 
                    levelUsuario &&
                    <button
                        type="button"
                        onClick={handleMenuPet}
                    >
                        <span className='icon ic-pets' />
                        Pets
                    </button>
                }

                {
                    // MENU PET
                    menuPet &&
                    (
                        <>
                            <Link to='/dashboard/apadrinhar'>
                                <button
                                    type="button"
                                    className='sub-menu'
                                >
                                    <span>Apadrinhar</span>
                                </button>
                            </Link>

                            <Link to='/dashboard/acompanhar'>
                                <button
                                    type="button"
                                    className='sub-menu'
                                >
                                    <span>Acompanhar</span>
                                </button>
                            </Link>

                            <Link to='/dashboard/formulario'>
                                <button
                                    type="button"
                                    className='sub-menu'
                                >
                                    <span>Encontrei</span>
                                </button>
                            </Link>
                        </>
                    )
                }

                {
                    // SOMENTE O USUARIO TEM ACESSO AO BOTAO 
                    levelUsuario &&
                    <button
                        type="button"
                        onClick={handleMenuInst}
                    >
                        <span className='icon ic-instituicao' />
                        Instituições
                    </button>
                }

                {
                    // MENU INSTITUIÇÃO
                    menuInst &&
                    (
                        <>
                            <Link to='/dashboard/ongs'>
                                <button
                                    type="button"
                                    className='sub-menu'
                                >
                                    <span>ONG`S</span>
                                </button>
                            </Link>

                            <Link to='/dashboard/parceiros'>
                                <button
                                    type="button"
                                    className='sub-menu'
                                >
                                    <span>Parceiros</span>
                                </button>
                            </Link>
                        </>
                    )
                }

                {
                    levelUsuario &&
                    <Link to='/dashboard/doacao'>
                        <button
                            type="button"
                        >
                            <span className='icon ic-doacoes' />
                            Doações
                        </button>
                    </Link>
                }

                {
                    // SOMENTE A ONG TEM ACESSO AO BOTAO 
                    levelOng && (
                        <>
                            <Link to='/dashboard/resgatar-pet'>
                                <button
                                    type="button"
                                >
                                    <span className='icon ic-resgatar' />
                                    Resgatar Pet
                                </button>
                            </Link>
                        </>
                    )
                }

                <Link to='/dashboard/configuracoes'>
                    <button
                        type="button"
                    >
                        <span className='icon ic-configuracao' />
                        Configurações
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MenuLateral