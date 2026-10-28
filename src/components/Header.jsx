import { Link } from "react-router-dom";

function Header() {
  return (

    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-6">

        <h1 className="text-2xl font-bold">
          Carros Importados
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-purple-950">
            Home
          </Link>

          <Link to="/carros" className="hover:text-purple-950">
            Carros
          </Link>

          <Link to="/contato" className="hover:text-purple-950">
            Contato
          </Link>

          <Link to="/login" className="hover:text-purple-950">
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}

export default Header
