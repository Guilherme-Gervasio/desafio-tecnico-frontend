import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChamadosProvider } from './contexts/ChamadosContext';
import Header from './components/Header';
import Home from './pages/Home';
import Gerenciamento from './pages/Gerenciamento';
import Cadastrar from './pages/Cadastrar';
import Listar from './pages/Listar';
import Editar from './pages/Editar';
import './App.css';
 
function App() {
  return (
    <ChamadosProvider>
      <BrowserRouter>
        <div className="container">
          <Header nome="Guilherme Gervásio da Silva" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chamados" element={<Gerenciamento />} />
            <Route path="/chamados/cadastrar" element={<Cadastrar />} />
            <Route path="/chamados/listar" element={<Listar />} />
            <Route path="/chamados/editar/:id" element={<Editar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChamadosProvider>
  );
}
 
export default App;