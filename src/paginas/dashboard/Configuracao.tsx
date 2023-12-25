import React from 'react';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/menu-lateral';
import Rodape from '../../components/rodape';

function Configuracao() {

    const [name, SetName] = useState('');
    const [senha, SetSenha] = useState('');

    function handleClick(){
        alert(
            "Nome: " + name +
            "\nSenha: " + senha +
            "\nSalvo com Sucesso!"
        )
    }

    function handleInputNome (event: React.ChangeEvent< HTMLInputElement >) {
        SetName(event.target.value);        
    }

    function handleInputSenha (event: React.ChangeEvent< HTMLInputElement >) {
        SetSenha(event.target.value);        
    }

    return(
        <div>
            <Cabecalho/>
                <div className='container'>
                    <div className='dashboard'>
                        <MenuLateral/>

                        <div className='container-painel'>
                            <div className='painel-configuracao'>
                                <h1>Configurações</h1>
                                <input type="text" 
                                    name="name-usuario" 
                                    disabled
                                />

                                <input type="text" 
                                    value={name} 
                                    name="email-usuario" 
                                    placeholder="nome@email.com"
                                    onChange={handleInputNome}
                                />
                                    
                                <input type="password" 
                                    value={senha} 
                                    name="usuario-senha" 
                                    placeholder="*********"
                                    onChange={handleInputSenha}
                                />

                                <input type="password" 
                                    name="usuario-senha-confirmar" 
                                    placeholder="*********"
                                />
                            
                                <div className='container-botoes'>
                                    <button type="button" className='bt-salvar' name='salvar' onClick={handleClick} > Salvar </button>

                                    <button type="button" className='bt-cancelar' name='cancelar'> Cancelar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            <Rodape/>
        </div>
    )
}
export default Configuracao