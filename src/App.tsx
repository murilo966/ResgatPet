import './App.css';
import { Routes, Route } from 'react-router-dom';

import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import Cadastrar from './paginas/autenticacao/Cadastrar';
import ComoAjudar from './paginas/home/ComoAjudar';
import Home from './paginas/home/Home';
import Login from './paginas/autenticacao/Login';
import QuemSomos from './paginas/home/QuemSomos';
import EsqueceuSenha from './paginas/autenticacao/EsqueceuSenha';
import Dasboard from './paginas/dashboard/Dashboard';
import Acompanhar from './paginas/dashboard/Acompanhar';
import Configuracao from './paginas/dashboard/Configuracao';
import ResgatarPet from './paginas/dashboard/ResgatarPet';
import NotFound from './paginas/erros/NotFound';
import Formulario from './paginas/home/Formulario';
import {RequireAuth} from './contexts/auth/RequireAuth';

function App() {
  return (
    <div>
      <header>
        <Cabecalho/>
      </header>
      
      <Routes>
        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/formulario' element={<RequireAuth><Formulario/></RequireAuth>} ></Route>
        <Route path='/quem-somos' element={<QuemSomos/>} ></Route>
        <Route path='/como-ajudar' element={<ComoAjudar/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>        
        <Route path='/esqueceu-senha' element={<EsqueceuSenha/>} ></Route>
        <Route path='/cadastrar' element={<Cadastrar/>} ></Route>
        <Route path='/dashboard' element={<RequireAuth><Dasboard/></RequireAuth>}></Route>
        <Route path='/dashboard/resgatar-pet' element={<RequireAuth><ResgatarPet/></RequireAuth>} ></Route>
        <Route path='/dashboard/acompanhar' element={<RequireAuth><Acompanhar/></RequireAuth>} ></Route>
        <Route path='/dashboard/configuracoes' element={<RequireAuth><Configuracao/></RequireAuth>} ></Route>
      </Routes>

      <footer>
        <Rodape/>
      </footer>
    </div>
  );
}

export default App;
