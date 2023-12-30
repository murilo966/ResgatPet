import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/menu-lateral';
import Rodape from '../../components/rodape';

function Acompanhar() {
    return(
        <div>
            <Cabecalho/>
                <div className='container'>
                    <div className='dashboard'>
                        <MenuLateral/>

                        <div className='container-painel'>
                            <h1>Acompanhar</h1>

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