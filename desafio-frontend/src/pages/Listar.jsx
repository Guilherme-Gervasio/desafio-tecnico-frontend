import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChamadosContext } from '../contexts/ChamadosContext.jsx';
 
export default function Listar() {
  const { chamados, setChamados } = useContext(ChamadosContext);
 
  const handleExcluir = (id) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir este chamado?');
    if (confirmacao) {
      setChamados(chamados.filter(chamado => chamado.id !== id));
    }
  };
 
  return (
    <div>
      <Link to="/chamados" className="btn btn-secondary">Voltar</Link>
      <h3 style={{ marginBottom: '20px', color: '#5c4033' }}>Listagem de Chamados</h3>
      
      {chamados.length === 0 ? (
        <p>Nenhum chamado cadastrado.</p>
      ) : (
        chamados.map((chamado) => (
          <div key={chamado.id} className="listagem-item">
            <p><strong>ID:</strong> {chamado.id}</p>
            <p><strong>Título:</strong> {chamado.titulo}</p>
            <p><strong>Descrição:</strong> {chamado.descricao}</p>
            <p><strong>Prioridade:</strong> {chamado.prioridade}</p>
            <p><strong>Solicitante:</strong> {chamado.solicitante}</p>
            <p><strong>Status:</strong> {chamado.status}</p>
            <div style={{ marginTop: '15px' }}>
              <Link to={`/chamados/editar/${chamado.id}`} className="btn btn-primary">Alterar</Link>
              <button onClick={() => handleExcluir(chamado.id)} className="btn btn-danger">Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}