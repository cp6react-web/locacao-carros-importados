import kia from "../assets/kia-sportage.png";
import bmw from "../assets/bmw.png";
import mercedes from "../assets/mercedes.png";
import audi from "../assets/audi.png";
import porsche from "../assets/porsche.png";
import CarrosCard from "../components/CarrosCard";

const carros = [
  { id: 1, nome: "Kia Sportage", marca: "Kia", preco: 1300, imagem: kia },
  { id: 2, nome: "BMW M4", marca: "BMW", preco: 2500, imagem: bmw },
  { id: 3, nome: "Mercedes C300", marca: "Mercedes-Benz", preco: 2200, imagem: mercedes },
  { id: 4, nome: "Audi A4", marca: "Audi", preco: 1900, imagem: audi },
  { id: 5, nome: "Porsche 911", marca: "Porsche", preco: 4500, imagem: porsche },
];

function Carros() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Nossos carros</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <CarrosCard
            key={carro.id}
            nome={carro.nome}
            marca={carro.marca}
            preco={carro.preco}
            imagem={carro.imagem}
          />
        ))}
      </div>
    </section>
  );
}

export default Carros;