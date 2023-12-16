import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                            <div className='titulo'>
                                <label>Configurações</label>
                            </div> 

                            <div className='painel-configuracao'>

                            	<div className='usuario-login'>
                                    <input type="text" name="name-usuario" disabled/>
                                </div>

                                <div className='usuario-login'>
                                    <input type="text" value={name} onChange={handleInputNome} name="email-usuario" placeholder="nome@email.com"/>                        
                                </div>
                                
                                <div className='usuario-senha'>
                                    <input type="password" value={senha} onChange={handleInputSenha} name="usuario-senha" placeholder="*********"/>
                                </div>

                                <div className='usuario-senha-confirmar'>
                                    <input type="password" name="usuario-senha-confirmar" placeholder="*********"/>
                                </div> 
                            
                                <div className='bt-editar-cadastro'>
                                    <div className='bt-salvar-configuracao'>
                                        <Link to='#'>
                                            <button onClick={handleClick} className='bt-salvar' type="button" name='salvar'> Salvar </button>
                                        </Link>
                                    </div>

                                    <div className='bt-cancelar-configuracao'>
                                        <Link to='#'>
                                            <button className='bt-cancelar' type="button" name='cancelar'> Cancelar </button>
                                        </Link>
                                    </div>
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