import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-xl font-bold text-white">Carros Importados</p>
          <p className="text-sm text-gray-400">
            Encontre o carro importado ideal para você.
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex gap-6 text-sm">
          <Link to="/carros" className="hover:text-gray-500">
            Carros
          </Link>
          <Link to="/contato" className="hover:text-gray-500">
            Contato
          </Link>
          <Link to="/login" className="hover:text-gray-500">
            Login
          </Link>
        </nav>

      </div>

      <p className="border-t border-gray-800 p-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Carros Importados. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;