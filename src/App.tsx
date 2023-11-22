import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegistroPF from './paginas/RegitroPF';
import ComoAjudar from './paginas/ComoAjudar';
import Home from './paginas/Home';
import Login from './paginas/Login';
import QuemSomos from './paginas/QuemSomos';
import RegistroPJ from './paginas/RegistroPJ';
import EsqueceuSenha from './paginas/EsqueceuSenha';
import Dasboard from './paginas/Dashboard';
import Acompanhar from './paginas/Acompanhar';
import Historico from './paginas/Historico';
import Configuracao from './paginas/Configuracao';
import ResgatarPet from './paginas/ResgatarPet';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/quem-somos' element={<QuemSomos/>} ></Route>
        <Route path='/como-ajudar' element={<ComoAjudar/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>        
        <Route path='/esqueceu-senha' element={<EsqueceuSenha/>} ></Route>
        <Route path='/registro-pf' element={<RegistroPF/>} ></Route>
        <Route path='/registro-pj' element={<RegistroPJ/>} ></Route>
        <Route path='/dashboard' element={<Dasboard/>} ></Route>
        <Route path='/resgatar-pet' element={<ResgatarPet/>} ></Route>
        <Route path='/acompanhar' element={<Acompanhar/>} ></Route>
        <Route path='/historico' element={<Historico/>} ></Route>
        <Route path='/configuracoes' element={<Configuracao/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
