import { Link } from 'react-router-dom';
 
export default function Home() {
  return (
    <div>
      <h3>Bem-vindo ao Sistema de Suporte</h3>
      <div className="card-container">
        <Link to="/chamados" className="card">
          Gerenciamento de Chamados
        </Link>
      </div>
    </div>
  );
}