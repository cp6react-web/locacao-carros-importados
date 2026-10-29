import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, mensagem });

    setNome("");
    setEmail("");
    setMensagem("");
    setEnviado(true);
  }

  return (
    <main className="bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-gray-900">
          Contato
        </h1>
        <p className="mb-10 text-center text-gray-600">
          Tem alguma dúvida ou quer fazer uma reserva? Fale com a gente.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-lg bg-gray-900 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-purple-400">
              Nossos canais
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>
                <p className="text-sm text-gray-400">E-mail</p>
                <p>contato@carrosimportados.com.br</p>
              </li>
              <li>
                <p className="text-sm text-gray-400">Telefone</p>
                <p>(11) 99999-9999</p>
              </li>
              <li>
                <p className="text-sm text-gray-400">Endereço</p>
                <p>Av. Paulista, 1000 - São Paulo/SP</p>
              </li>
              <li>
                <p className="text-sm text-gray-400">Horário de atendimento</p>
                <p>Segunda a sexta, das 9h às 18h</p>
              </li>
            </ul>
          </section>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-gray-900 p-8 text-white shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold text-purple-400">
              Envie uma mensagem
            </h2>

            {enviado && (
              <p className="mb-4 rounded bg-green-900 px-3 py-2 text-sm text-green-200">
                Mensagem enviada com sucesso!
              </p>
            )}

            <label htmlFor="nome" className="mb-1 block text-sm text-gray-400">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
              className="mb-4 w-full rounded bg-gray-800 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

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

            <label
              htmlFor="mensagem"
              className="mb-1 block text-sm text-gray-400"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows="4"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Escreva sua mensagem"
              required
              className="mb-6 w-full rounded bg-gray-800 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full rounded bg-purple-600 py-2 font-semibold transition hover:bg-purple-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contato;