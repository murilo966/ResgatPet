import './App.css';
import { Routes, Route } from 'react-router-dom';

import Cadastrar from './paginas/autenticacao/Cadastrar';
import ComoAjudar from './paginas/chome/ComoAjudar';
import Home from './paginas/chome/Home';
import Login from './paginas/autenticacao/Login';
import QuemSomos from './paginas/chome/QuemSomos';
import EsqueceuSenha from './paginas/autenticacao/EsqueceuSenha';
import Dasboard from './paginas/cdashboard/Dashboard';
import Acompanhar from './paginas/cdashboard/Acompanhar';
import Historico from './paginas/cdashboard/Historico';
import Configuracao from './paginas/cdashboard/Configuracao';
import ResgatarPet from './paginas/cdashboard/ResgatarPet';
import NotFound from './paginas/cerros/NotFound';
import Formulario from './paginas/chome/Formulario';


function App() {
  return (
    <div>
      <Routes>

        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/formulario' element={<Formulario/>} ></Route>
        <Route path='/quem-somos' element={<QuemSomos/>} ></Route>
        <Route path='/como-ajudar' element={<ComoAjudar/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>        
        <Route path='/esqueceu-senha' element={<EsqueceuSenha/>} ></Route>
        <Route path='/cadastrar' element={<Cadastrar/>} ></Route>
        <Route path='/dashboard' element={<Dasboard/>}></Route>
        <Route path='/dashboard/resgatar-pet' element={<ResgatarPet/>} ></Route>
        <Route path='/dashboard/acompanhar' element={<Acompanhar/>} ></Route>
        <Route path='/dashboard/historico' element={<Historico/>} ></Route>
        <Route path='/dashboard/configuracoes' element={<Configuracao/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
