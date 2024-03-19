import Menu from '../navegador-botoes'
import { UsuarioLogadoProvider } from '../../context/authContext'

function Cabecalho() {

    return(
        // CRIA USUARIO PROVIDE VERFICAÇAO DO LOGIN JUNTO AO BOTOES DE DASHBOARD E SAIR
        <UsuarioLogadoProvider>
            <div className='container-cabecalho'>
                <Menu/>            
            </div>
        </UsuarioLogadoProvider>
    )
}

export default Cabecalho