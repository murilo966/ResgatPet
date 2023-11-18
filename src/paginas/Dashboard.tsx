import Cabecalho from '../components/cabecalho';
import MenuLateral from '../components/dashboard';
import Rodape from '../components/rodape';

function Dasboard() {
    return(
        <div>
            <Cabecalho/>

                <div className='container'>
                    <MenuLateral/>
                </div>            
            
            <Rodape/>            
        </div>

    )
}
export default Dasboard