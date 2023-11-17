import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cadastrar from './paginas/Cadastrar';
import ComoAjudar from './paginas/ComoAjudar';
import Home from './paginas/Home';
import Login from './paginas/Login';
import QuemSomos from './paginas/QuemSomos';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/quem-somos' element={<QuemSomos/>} ></Route>
        <Route path='/cadastrar' element={<Cadastrar/>} ></Route>
        <Route path='/como-ajudar' element={<ComoAjudar/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
