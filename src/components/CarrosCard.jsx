function CarrosCard({ nome, marca, preco, imagem }) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-gray-900 text-white shadow-lg">
      <img src={imagem} alt={nome} className="h-48 w-full object-cover" />

      <div className="p-4">
        <p className="text-sm text-gray-400">{marca}</p>
        <h2 className="text-xl font-bold">{nome}</h2>
        <p className="font-semibold text-gray-400">
          R$ {preco.toLocaleString("pt-BR")}
        </p>
      </div>
    </div>
  );
}

export default CarrosCard;