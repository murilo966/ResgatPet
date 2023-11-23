import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/dashboard';
import Rodape from '../../components/rodape';

function Acompanhar() {
    return(
        <div>
            <Cabecalho/>
                <div className='container'>
                    <div className='dashboard'>
                        <MenuLateral/>

                        <div className='container-painel'>
                            <div className='titulo'>
                                <label>Acompanhar</label>
                            </div>              

                            <div className='tabela-acompanhar'>
                                <label> TABELA DOS PETS ENVIADOS</label>
                            </div>
                        </div>
                    </div>
                </div>            
            <Rodape/>              
        </div>
    )
}
export default Acompanhar