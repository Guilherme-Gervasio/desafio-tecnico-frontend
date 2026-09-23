import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChamadosProvider } from './contexts/ChamadosContext.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Gerenciamento from './pages/Gerenciamento.jsx';
import Cadastrar from './pages/Cadastrar.jsx';
import Listar from './pages/Listar.jsx';
import Editar from './pages/Editar.jsx';
import './App.css';
 
function App() {
  return (
    <ChamadosProvider>
      <BrowserRouter>
        <div className="container">
          {/* Identificação obrigatória do aluno visível em todas as páginas */}
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