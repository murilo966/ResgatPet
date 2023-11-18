import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';
import Cabecalho2 from '../components/cabecalho2';


function EsqueceuSenha(){
    return(
        <div>
            <Cabecalho2/>
            <div className='container'>
                
                <div className='container-recuperar'>
                    <div className='esqueceu-senha-cont'>
                        <div className='titulo-recuperacao'>
                            <label>Recuperar Senha</label>
                        </div>
                        <div className='user-email-rec'>
                            <input type="text" placeholder='nome@email.com'/>
                        </div>
                        <div className='enviar-recuperacao'>
                            <button >Enviar</button>
                        </div>

                    </div>
                </div>


            </div>
            <Rodape/>
        </div>
    )
}

export default EsqueceuSenha