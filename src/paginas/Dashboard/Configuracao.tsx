import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/menu-lateral';
import Rodape from '../../components/rodape';

type lista = {
    PaginaAtual:String
}

function Configuracao(atual:lista) {
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
                                    <input type="text" name="email-usuario" placeholder="nome@email.com"/>
                                </div>

                                <div className='usuario-senha'>
                                    <input type="text" name="usuario-senha" placeholder="*********"/>
                                </div>

                                <div className='usuario-senha-confirmar'>
                                    <input type="text" name="usuario-senha-confirmar" placeholder="*********"/>
                                </div> 
                            
                                <div className='bt-editar-cadastro'>
                                    <div className='bt-salvar-configuracao'>
                                        <Link to='#'>
                                            <button className='bt-salvar' type="button" name='salvar'> Salvar </button>
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
                {atual.PaginaAtual}            
            <Rodape/>
        </div>
    )
}
export default Configuracao