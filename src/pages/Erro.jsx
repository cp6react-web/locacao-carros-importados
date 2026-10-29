import { Link } from "react-router-dom";

function Erro() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-gray-100 px-6 py-12 text-center">
      <p className="text-7xl font-bold text-purple-600">404</p>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">
        Página não encontrada
      </h1>
      <p className="mt-2 text-gray-600">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>

      <Link
        to="/"
        className="mt-8 rounded bg-gray-900 px-6 py-2 font-semibold text-white transition hover:bg-gray-800"
      >
        Voltar para a página inicial
      </Link>
    </main>
  );
}

export default Erro;