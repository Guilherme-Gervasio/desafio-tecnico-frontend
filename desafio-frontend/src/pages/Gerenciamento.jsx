import { Link } from 'react-router-dom';
 
export default function Gerenciamento() {
  return (
    <div>
      <Link to="/" className="btn btn-secondary">Voltar</Link>
      <h3>Gerenciamento de Chamados</h3>
      <div className="card-container">
        <Link to="/chamados/listar" className="card">
          Listar chamados
        </Link>
        <Link to="/chamados/cadastrar" className="card">
          Cadastrar novo chamado
        </Link>
      </div>
    </div>
  );
}