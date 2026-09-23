import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChamadosContext } from '../contexts/ChamadosContext';
 
export default function Cadastrar() {
  const { chamados, setChamados } = useContext(ChamadosContext);
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    prioridade: '1',
    solicitante: '',
    status: 'ABERTO'
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const novoChamado = {
      ...formData,
      id: Date.now() // Gerador simples de ID
    };
    setChamados([...chamados, novoChamado]);
    navigate('/chamados/listar'); // Redireciona para a listagem
  };
 
  return (
    <div>
      <Link to="/chamados" className="btn btn-secondary">Voltar</Link>
      <h3>Cadastrar Novo Chamado</h3>
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
 
        <button type="submit" className="btn btn-primary">Salvar Chamado</button>
      </form>
    </div>
  );
}