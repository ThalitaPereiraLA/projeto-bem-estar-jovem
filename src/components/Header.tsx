import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white bg-opacity-70 shadow-md backdrop-blur-md">
      <nav className="flex justify-between items-center max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-blue-600">Bem-Estar Jovem</h1>
        <ul className="flex gap-4 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-600">Início</Link></li>
          <li><Link to="/info" className="hover:text-green-600">Info</Link></li>
          <li><Link to="/tools" className="hover:text-purple-600">Ferramentas</Link></li>
          <li><Link to="/videos" className="hover:text-blue-600">Vídeos</Link></li>
          <li><Link to="/help" className="hover:text-pink-600">Ajuda</Link></li>
        </ul>
      </nav>
    </header>
  );
}
