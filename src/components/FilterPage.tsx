// FiltrosPage.tsx
import React, { useState } from "react";
import FiltroCheckboxList from "../components/Filters";

export default function FilterPage() {
  const [openFilters, setOpenFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setOpenFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const cursos = [
    "Engenharia da Computação",
    "Engenharia de Produção",
    "Engenharia Elétrica",
    "Engenharia de Controle e Automação",
    "Administração",
  ];

  const periodos = [
    "1º semestre",
    "2º semestre",
    "3º semestre",
    "4º semestre",
    "5º semestre",
    "6º semestre",
    "7º semestre",
    "8º semestre",
    "9º semestre",
    "10º semestre",
  ];

  const statusList = ["Aprovado", "Reprovado", "Em análise", "Inativo"];

  return (
    <main className="min-h-screen bg-indigo-600/70 p-6">
      <div className="mx-auto max-w-6xl">
        {/* 🔹 Barra branca de filtros */}
        <div className="flex items-center justify-start rounded-2xl bg-white/90 px-6 py-3 shadow-lg">
          {/* Esquerda: título "Filtros" */}
          <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>

          {/* Direita: botões expansíveis */}
          <div className="flex items-center gap-3 ml-6">
            {/* Filtro de Curso */}
            <div className="relative">
              <button
                onClick={() => toggleFilter("curso")}
                className="rounded-xl bg-[#d9e6f5] px-4 py-2 text-sm font-medium text-gray-800 hover:bg-[#c9d8ea] flex items-center justify-between min-w-[120px]"
              >
                <span>Curso</span>
                <span
                  className={`ml-2 transition-transform ${
                    openFilters.includes("curso") ? "rotate-90" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFilters.includes("curso") && (
                <div className="absolute left-0 mt-2 z-10">
                  <FiltroCheckboxList
                    title="Curso"
                    options={cursos}
                    onApply={(sel: string[]) =>
                      console.log("Aplicar Curso:", sel)
                    }
                    onCancel={() =>
                      setOpenFilters((prev) =>
                        prev.filter((f) => f !== "curso")
                      )
                    }
                    idPrefix="curso"
                  />
                </div>
              )}
            </div>

            {/* Filtro de Período */}
            <div className="relative">
              <button
                onClick={() => toggleFilter("periodo")}
                className="rounded-xl bg-[#d9e6f5] px-4 py-2 text-sm font-medium text-gray-800 hover:bg-[#c9d8ea] flex items-center justify-between min-w-[120px]"
              >
                <span>Período</span>
                <span
                  className={`ml-2 transition-transform ${
                    openFilters.includes("periodo") ? "rotate-90" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFilters.includes("periodo") && (
                <div className="absolute left-0 mt-2 z-10">
                  <FiltroCheckboxList
                    title="Período"
                    options={periodos}
                    onApply={(sel: string[]) =>
                      console.log("Aplicar Período:", sel)
                    }
                    onCancel={() =>
                      setOpenFilters((prev) =>
                        prev.filter((f) => f !== "periodo")
                      )
                    }
                    idPrefix="periodo"
                  />
                </div>
              )}
            </div>

            {/* Filtro de Status */}
            <div className="relative">
              <button
                onClick={() => toggleFilter("status")}
                className="rounded-xl bg-[#d9e6f5] px-4 py-2 text-sm font-medium text-gray-800 hover:bg-[#c9d8ea] flex items-center justify-between min-w-[120px]"
              >
                <span>Status</span>
                <span
                  className={`ml-2 transition-transform ${
                    openFilters.includes("status") ? "rotate-90" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFilters.includes("status") && (
                <div className="absolute left-0 mt-2 z-10">
                  <FiltroCheckboxList
                    title="Status"
                    options={statusList}
                    onApply={(sel: string[]) =>
                      console.log("Aplicar Status:", sel)
                    }
                    onCancel={() =>
                      setOpenFilters((prev) =>
                        prev.filter((f) => f !== "status")
                      )
                    }
                    idPrefix="status"
                    spacing="space-y-6"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
