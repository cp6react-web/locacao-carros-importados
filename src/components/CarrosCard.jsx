function CarrosCard({ nome, marca, preco, imagem }) {
  return (
    <article className="w-full overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <img src={imagem} alt={nome} className="h-48 w-full object-cover" />

      <div className="p-4">
        <p className="text-sm text-gray-400">{marca}</p>
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="mt-2 font-semibold text-purple-400">
          R$ {preco.toLocaleString("pt-BR")}
        </p>
      </div>
    </article>
  );
}

export default CarrosCard;