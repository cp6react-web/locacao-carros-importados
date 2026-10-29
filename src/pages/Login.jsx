import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, senha });

    setEmail("");
    setSenha("");
    setEnviado(true);
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-gray-900 p-8 text-white shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>

        {enviado && (
          <p className="mb-4 rounded bg-green-900 px-3 py-2 text-sm text-green-200">
            Login enviado com sucesso!
          </p>
        )}

        <label htmlFor="email" className="mb-1 block text-sm text-gray-400">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seuemail@exemplo.com"
          required
          className="mb-4 w-full rounded bg-gray-800 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label htmlFor="senha" className="mb-1 block text-sm text-gray-400">
          Senha
        </label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="••••••••"
          required
          className="mb-6 w-full rounded bg-gray-800 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full rounded bg-purple-600 py-2 font-semibold transition hover:bg-purple-500"
        >
          Entrar
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Voltar para a{" "}
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            página inicial
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;