import { Link } from "react-router-dom";
import mercedes from "../assets/mercedes.png";

const diferenciais = [
  {
    titulo: "Frota premium",
    texto:
      "Carros importados revisados e em perfeito estado, prontos para você aproveitar com segurança e conforto.",
  },
  {
    titulo: "Atendimento de verdade",
    texto:
      "Nossa equipe acompanha você do primeiro contato até a devolução, sempre com atenção e agilidade.",
  },
  {
    titulo: "Preço transparente",
    texto:
      "Sem letras miúdas: você sabe exatamente quanto vai pagar antes de fechar a locação.",
  },
];

function Home() {
  return (
    <main>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-purple-400">
              Locação de carros importados
            </p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">
              Dirija o carro dos seus sonhos
            </h1>
            <p className="mt-4 text-gray-300">
              Na Carros Importados, cada locação é pensada para ser uma
              experiência especial. Qualidade, segurança e um atendimento que
              faz você se sentir em casa: é assim que trabalhamos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/carros"
                className="rounded bg-purple-600 px-6 py-2 font-semibold transition hover:bg-purple-500"
              >
                Ver carros
              </Link>
              <Link
                to="/contato"
                className="rounded border border-gray-600 px-6 py-2 font-semibold transition hover:border-purple-500 hover:text-purple-400"
              >
                Fale conosco
              </Link>
            </div>
          </div>

          <img
            src={mercedes}
            alt="Mercedes disponível para locação"
            className="h-72 w-full rounded-lg object-cover shadow-lg md:h-96"
          />
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
            Por que escolher a gente?
          </h2>
          <p className="mb-10 text-center text-gray-600">
            Três motivos para você alugar com a Carros Importados.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {diferenciais.map((item) => (
              <article
                key={item.titulo}
                className="rounded-lg bg-gray-900 p-6 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-purple-400">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Pronto para pegar a estrada?</h2>
        <p className="mt-2 text-gray-400">
          Escolha seu carro e reserve hoje mesmo.
        </p>
        <Link
          to="/carros"
          className="mt-6 inline-block rounded bg-purple-600 px-6 py-2 font-semibold transition hover:bg-purple-500"
        >
          Escolher meu carro
        </Link>
      </section>
    </main>
  );
}

export default Home;