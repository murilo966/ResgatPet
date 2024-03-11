import './App.css';
import { Routes, Route } from 'react-router-dom';
import { UsuarioLogadoProvider } from './context/authContext';

import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import Home from './paginas/home/Home';
import Login from './paginas/autenticacao/Login';
import QuemSomos from './paginas/home/QuemSomos';
import EsqueceuSenha from './paginas/autenticacao/EsqueceuSenha';
import Dasboard from './paginas/dashboard/Dashboard';
import Acompanhar from './paginas/dashboard/Acompanhar';
import Configuracao from './paginas/dashboard/Configuracao';
import ResgatarPet from './paginas/dashboard/ResgatarPet';
import NotFound from './paginas/erros/NotFound';
import Formulario from './paginas/dashboard/Formulario';
import Apadrinhar from './paginas/dashboard/Apadrinhar';
import Doacao from './paginas/dashboard/Doacao';
import Ongs from './paginas/dashboard/Ongs';
import Parceiros from './paginas/dashboard/Parceiros';
import Acolhidos from './paginas/dashboard/Acolhidos';

function App() {
  return (
    <div>
      <header>
        <Cabecalho />
      </header>

      <UsuarioLogadoProvider>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/quem-somos' element={<QuemSomos />} />
          <Route path='/login' element={<Login />} />
          <Route path='/esqueceu-senha' element={<EsqueceuSenha />} />
          <Route path='/dashboard' element={<Dasboard />} />
          <Route path='/dashboard/resgatar-pet' element={<ResgatarPet />} />
          <Route path='/dashboard/formulario' element={<Formulario />} />
          <Route path='/dashboard/apadrinhar' element={<Apadrinhar />} />
          <Route path='/dashboard/doacao' element={<Doacao />} />
          <Route path='/dashboard/ongs' element={<Ongs />} />
          <Route path='/dashboard/parceiros' element={<Parceiros />} />
          <Route path='/dashboard/acompanhar' element={<Acompanhar />} />
          <Route path='/dashboard/acolhidos' element={<Acolhidos />} />
          <Route path='/dashboard/configuracoes' element={<Configuracao />} />
        </Routes>
      </UsuarioLogadoProvider>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}

export default App;
