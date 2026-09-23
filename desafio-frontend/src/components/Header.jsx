export default function Header({ nome }) {
  return (
    <header className="header">
      <h2>Sistema de Suporte TechSolutions</h2>
      <p>Desenvolvido por: {nome}</p>
    </header>
  );
}