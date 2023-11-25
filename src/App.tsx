import './App.css';
import { Routes, Route } from 'react-router-dom';

import RegistroPF from './paginas/Registros/RegitroPF';
import ComoAjudar from './paginas/Home/ComoAjudar';
import Home from './paginas/Home/Home';
import Login from './paginas/Registros/Login';
import QuemSomos from './paginas/Home/QuemSomos';
import RegistroPJ from './paginas/Registros/RegistroPJ';
import EsqueceuSenha from './paginas/Registros/EsqueceuSenha';
import Dasboard from './paginas/Dashboard/Dashboard';
import Acompanhar from './paginas/Dashboard/Acompanhar';
import Historico from './paginas/Dashboard/Historico';
import Configuracao from './paginas/Dashboard/Configuracao';
import ResgatarPet from './paginas/Dashboard/ResgatarPet';
import NotFound from './paginas/Erros/NotFound';
import Formulario from './paginas/Home/Formulario';


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
        <Route path='/registro-pf' element={<RegistroPF/>} ></Route>
        <Route path='/registro-pj' element={<RegistroPJ/>} ></Route>


        <Route path='/dashboard' element={<Dasboard PaginaAtual="Este é o DashBoard"/>}></Route>
        <Route path='/dashboard/resgatar-pet' element={<ResgatarPet PaginaAtual="Esse é o DashBoard/ResgatarPet"/>} ></Route>
        <Route path='/dashboard/acompanhar' element={<Acompanhar PaginaAtual="Esse é o DashBoard/Acompanhar"/>} ></Route>
        <Route path='/dashboard/historico' element={<Historico PaginaAtual="Esse é o DashBoard/Histórico"/>} ></Route>
        <Route path='/dashboard/configuracoes' element={<Configuracao PaginaAtual="Esse e o DashBoard/Configurações"/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
