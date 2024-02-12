import './App.css';
import { Routes, Route } from 'react-router-dom';

import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import Cadastrar from './paginas/autenticacao/Cadastrar';
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
import { RequireAuth } from './contexts/auth/RequireAuth';

function App() {
  return (
    <div>
      <header>
        <Cabecalho />
      </header>

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/quem-somos' element={<QuemSomos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/esqueceu-senha' element={<EsqueceuSenha />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/dashboard' element={<Dasboard />} />
        <Route path='/dashboard/resgatar-pet' element={<RequireAuth level={0}><ResgatarPet /></RequireAuth>} />
        <Route path='/dashboard/acompanhar' element={<RequireAuth level={0}><Acompanhar /></RequireAuth>} />
        <Route path='/dashboard/configuracoes' element={<Configuracao />} />
      </Routes>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}

export default App;
