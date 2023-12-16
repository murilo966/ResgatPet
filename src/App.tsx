import './App.css';
import { Routes, Route } from 'react-router-dom';

import Cadastrar from './paginas/autenticacao/Cadastrar';
import ComoAjudar from './paginas/home/ComoAjudar';
import Home from './paginas/home/Home';
import Login from './paginas/autenticacao/Login';
import QuemSomos from './paginas/home/QuemSomos';
import EsqueceuSenha from './paginas/autenticacao/EsqueceuSenha';
import Dasboard from './paginas/dashboard/Dashboard';
import Acompanhar from './paginas/dashboard/Acompanhar';
import Historico from './paginas/dashboard/Historico';
import Configuracao from './paginas/dashboard/Configuracao';
import ResgatarPet from './paginas/dashboard/ResgatarPet';
import NotFound from './paginas/erros/NotFound';
import Formulario from './paginas/home/Formulario';


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
