import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth/AuthContext';
import MenuLateral from '../../components/menu-lateral';

function Configuracao() {

    const auth = useContext(AuthContext);
    const [email, SetEmail] = useState('');
    const [senha, SetSenha] = useState('');
    const [senhaConfirmar, SetSenhaConfirmar] = useState('');

    function handleSalvar() {
        alert(
            "\E-Mail: " + email +
            "\nSenha: " + senha +
            "\nSalvo com Sucesso!"
        )
    }

    function handleCancelar() {
        SetEmail('')
        SetSenha('')
        SetSenhaConfirmar('')
    }

    function handleInputEmail(event: React.ChangeEvent<HTMLInputElement>) {
        SetEmail(event.target.value);
    }

    function handleInputSenha(event: React.ChangeEvent<HTMLInputElement>) {
        SetSenha(event.target.value);
    }

    function handleInputSenhaConfirmar(event: React.ChangeEvent<HTMLInputElement>) {
        SetSenhaConfirmar(event.target.value);
    }

    return (
        <div>
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />
                    <div className='container-painel '>
                        <div className='configuracao'>
                            <h1>Configurações</h1>
                            <input type="text"
                                name="name-usuario"
                                value={auth.user?.name}
                                disabled
                            />

                            <input type="text"
                                id='capitalize'
                                value={email}
                                name="email-usuario"
                                placeholder="nome@email.com"
                                onChange={handleInputEmail}
                            />

                            <input type="password"
                                value={senha}
                                name="usuario-senha"
                                placeholder="*********"
                                onChange={handleInputSenha}
                            />

                            <input type="password"
                                value={senhaConfirmar}
                                name="usuario-senha-confirmar"
                                placeholder="*********"
                                onChange={handleInputSenhaConfirmar}
                            />

                            <div className='container-botoes'>
                                <button type="button" className='bt-salvar' name='salvar' onClick={handleSalvar} > Salvar </button>

                                <button type="button" className='bt-cancelar' name='cancelar' onClick={handleCancelar} > Cancelar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Configuracao