import { useState } from "react";

const entidades = [
  {
    id: "1",
    name: "Dev Community Mauá",
    imageUrl: "https://picsum.photos/200/300?random=1",
  },
  {
    id: "2",
    name: "Nauwat",
    imageUrl: "https://picsum.photos/200/300?random=2",
  },
  {
    id: "3",
    name: "Mauá E-Sports",
    imageUrl: "https://picsum.photos/200/300?random=3",
  },
  {
    id: "4",
    name: "Guardian",
    imageUrl: "https://picsum.photos/200/300?random=4",
  },
  {
    id: "5",
    name: "MetaVerso",
    imageUrl: "https://picsum.photos/200/300?random=5",
  },
];

export default function EntidadesButtons() {
  const [isColorido, setIsColorido] = useState(true);

  return (
    <div className="relative min-h-screen bg-slate-100 flex items-center justify-center">
      {/* Botão azul de demonstração no canto */}
      <button
        className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() => setIsColorido(!isColorido)}
      >
        Alternar ({isColorido ? "Colorido" : "P&B"})
      </button>

      {/* Botões das entidades centralizados */}
      <div className="flex gap-10 flex-wrap justify-center">
        {entidades.map((entidade) => {
          const ativo = isColorido; // no futuro, será individual por login
          return (
            <div
              key={entidade.id}
              className="flex flex-col items-center w-36"
            >
              {ativo ? (
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <img
                    src={entidade.imageUrl}
                    alt={entidade.name}
                    className="rounded-2xl w-32 h-32 object-cover shadow-lg transition 
                               grayscale-0 group-hover:scale-105 group-hover:shadow-xl"
                  />
                  <button className="mt-2 text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-lg transition group-hover:bg-indigo-700">
                    Acessar
                  </button>
                </a>
              ) : (
                <div className="flex flex-col items-center opacity-60 cursor-not-allowed">
                  <img
                    src={entidade.imageUrl}
                    alt={entidade.name}
                    className="rounded-2xl w-32 h-32 object-cover shadow-lg grayscale"
                  />
                  <button
                    disabled
                    className="mt-2 text-sm font-medium text-white bg-gray-400 px-3 py-1 rounded-lg"
                  >
                    Acessar
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}