import MenuLateral from '../../components/menu-lateral';

function Acompanhar() {
    return(
        <div>
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
        </div>
    )
}
export default Acompanhar