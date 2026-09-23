import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ChamadosContext } from '../contexts/ChamadosContext.jsx';
 
export default function Editar() {
  const { id } = useParams();
  const { chamados, setChamados } = useContext(ChamadosContext);
  const navigate = useNavigate();
 
  const chamadoAtual = chamados.find(c => c.id === Number(id));
 
  const [formData, setFormData] = useState(
    chamadoAtual || {
      titulo: '',
      descricao: '',
      prioridade: '1',
      solicitante: '',
      status: 'ABERTO'
    }
  );
 
  useEffect(() => {
    if (!chamadoAtual) {
      navigate('/chamados/listar');
    }
  }, [chamadoAtual, navigate]);
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const chamadosAtualizados = chamados.map(chamado =>
      chamado.id === Number(id) ? { ...formData, id: Number(id) } : chamado
    );
    
    setChamados(chamadosAtualizados);
    navigate('/chamados/listar');
  };
 
  return (
    <div>
      <Link to="/chamados/listar" className="btn btn-secondary">Voltar</Link>
      <h3>Editar Chamado</h3>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
 
        <label>Descrição:</label>
        <textarea name="descricao" value={formData.descricao} onChange={handleChange} required />
 
        <label>Prioridade:</label>
        <select name="prioridade" value={formData.prioridade} onChange={handleChange}>
          <option value="1">Baixa</option>
          <option value="2">Média</option>
          <option value="3">Alta</option>
        </select>
 
        <label>Solicitante:</label>
        <input type="text" name="solicitante" value={formData.solicitante} onChange={handleChange} required />
 
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="ABERTO">ABERTO</option>
          <option value="EM ANDAMENTO">EM ANDAMENTO</option>
          <option value="FECHADO">FECHADO</option>
        </select>
 
        <button type="submit" className="btn btn-primary">Atualizar Chamado</button>
      </form>
    </div>
  );
}