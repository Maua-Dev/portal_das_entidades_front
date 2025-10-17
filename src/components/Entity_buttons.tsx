import { Link } from "react-router-dom";
import devCommunityLogo from "../assets/dev-community.png";
import guardianLogo from "../assets/guardian.png";
import mauaEsportsLogo from "../assets/maua-esports.png";
import metaversoMauaLogo from "../assets/metaverso-maua.png";
import nawatLogo from "../assets/nawat.png";

const entidades = [
  {
    id: "1",
    name: "Dev Community Mauá",
    imageUrl: devCommunityLogo,
  },
  {
    id: "2",
    name: "Nauwat",
    imageUrl: nawatLogo,
  },
  {
    id: "3",
    name: "Mauá E-Sports",
    imageUrl: mauaEsportsLogo,
  },
  {
    id: "4",
    name: "Guardian",
    imageUrl: guardianLogo,
  },
  {
    id: "5",
    name: "MetaVerso",
    imageUrl: metaversoMauaLogo,
  },
];

interface EntidadesButtonsProps {
  isColorido: boolean;
  size?: {
    width: string;
    height: string;
  }
}

export default function EntidadesButtons({
  isColorido,
  size = { width: "w-32", height: "h-32" }
}: EntidadesButtonsProps) {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {entidades.map((entidade) => (
        <div key={entidade.id} className={`flex flex-col items-center ${size.width}`}>
          {isColorido ? (
            <Link to={`/home/${entidade.id}`} className="flex flex-col items-center group">
              <img
                src={entidade.imageUrl}
                alt={entidade.name}
                className={`rounded-4xl ${size.width} ${size.height} object-cover shadow-lg transition 
                         grayscale-0 group-hover:scale-105 group-hover:shadow-xl `}
              />
              <button className="mt-2 text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-lg transition group-hover:bg-indigo-700">
                Acessar
              </button>
            </Link>
          ) : (
            <div className="flex flex-col items-center opacity-60 cursor-not-allowed">
              <img
                src={entidade.imageUrl}
                alt={entidade.name}
                className={`rounded-4xl ${size.width} ${size.height} object-cover shadow-lg grayscale`}
              />
              <button disabled className="mt-2 text-sm font-medium text-white bg-gray-400 px-3 py-1 rounded-lg">
                Acessar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}