import Cabecalho from '../components/cabecalho';
import MenuLateral from '../components/dashboard';
import Rodape from '../components/rodape';

function Historico() {
    return(
        <div>
            <Cabecalho/>
                <div className='container'>
                    <div className='dashboard'>
                        <MenuLateral/>

                        <div className='container-painel'>
                            <div className='titulo'>
                                <label>Histórico</label>
                            </div>              

                            <div className='tabela-historico'>
                                <label> TABELA DE TODOS OS PETS <br />ENVIADOS E CONCLUIDOS</label>
                            </div>
                        </div>
                    </div>
                </div>            
            <Rodape/>
        </div>
    )
}
export default Historico