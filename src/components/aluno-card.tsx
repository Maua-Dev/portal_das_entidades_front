import { COURSES } from "../utils/enums/course";
import type { User } from "../context/user-context";

interface AlunoCardProps {
  aluno: User;
}

export default function AlunoCard({ aluno }: AlunoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 w-full max-w-xl mx-auto mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <div className="text-lg font-bold text-gray-900">{aluno.name}</div>
          <div className="text-sm text-gray-500">RA: {aluno.ra}</div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 gap-2">
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Curso:</span>{" "}
            {aluno.course ? COURSES[aluno.course as keyof typeof COURSES] : "-"}
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Período:</span>{" "}
            {aluno.year ? `${aluno.year}º` : "-"}
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Entidade:</span>{" "}
            {aluno.organization || "-"}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <select
          value={aluno.state ?? ""}
          onChange={() => {}}
          className={`px-2 py-2 text-xs text-center font-semibold rounded-full w-28 leading-5 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105
            ${
              aluno.state === "PASSOU"
                ? "bg-green-100 text-green-800"
                : aluno.state === "NAO_PASSOU"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
        >
          <option value="PASSOU" className="bg-green-100 text-green-800">
            PASSOU
          </option>
          <option value="NAO_PASSOU" className="bg-red-100 text-red-800">
            NAO_PASSOU
          </option>
          <option value="CONGELADO" className="bg-yellow-100 text-yellow-800">
            CONGELADO
          </option>
        </select>
      </div>
    </div>
  );
}
