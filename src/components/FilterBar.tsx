import React, { useState, useCallback } from "react";
import FiltroCheckboxList from "../components/Filters"; // Ajuste o caminho se necessário

const CURSOS = [
  "Engenharia da Computação",
  "Engenharia de Produção",
  "Engenharia Elétrica",
  "Engenharia de Controle e Automação",
  "Administração",
];

const PERIODOS = [
  "1º semestre", "2º semestre", "3º semestre", "4º semestre", "5º semestre",
  "6º semestre", "7º semestre", "8º semestre", "9º semestre", "10º semestre",
];

const STATUS_LIST = ["Aprovado", "Reprovado", "Em análise", "Inativo"];

const buttonClasses = "rounded-xl bg-[#d9e6f5] px-3 py-2 text-sm font-medium text-gray-800 hover:bg-[#c9d8ea] flex items-center justify-between min-w-[110px]";

export default React.memo(function FiltersBar() {
  const [openFilters, setOpenFilters] = useState<string[]>([]);

  const toggleFilter = useCallback((filter: string) => {
    setOpenFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  }, []);

  return (
    <div className="flex items-center justify-start rounded-2xl bg-white/90 px-4 py-2 shadow-lg">
      <h2 className="text-sm font-semibold text-gray-800">Filtros</h2>

      <div className="relative flex items-center gap-3 ml-4">
        {/* Filtro de Curso */}
        <div className="relative">
          <button
            onClick={() => toggleFilter("curso")}
            className={buttonClasses}
            aria-expanded={openFilters.includes("curso")}
          >
            <span>Curso</span>
            <span className={`ml-2 transition-transform ${openFilters.includes("curso") ? "rotate-90" : ""}`}>
              ▼
            </span>
          </button>
          {openFilters.includes("curso") && (
            <div className="absolute top-full mt-1 z-10">
              <FiltroCheckboxList
                title="Curso"
                options={CURSOS}
                onApply={(sel: string[]) => console.log("Aplicar Curso:", sel)}
                onCancel={() => toggleFilter("curso")} 
                idPrefix="curso"
              />
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleFilter("periodo")}
            className={buttonClasses}
            aria-expanded={openFilters.includes("periodo")}
          >
            <span>Período</span>
            <span className={`ml-2 transition-transform ${openFilters.includes("periodo") ? "rotate-90" : ""}`}>
              ▼
            </span>
          </button>
          {openFilters.includes("periodo") && (
            <div className="absolute top-full mt-1 z-10">
              <FiltroCheckboxList
                title="Período"
                options={PERIODOS}
                onApply={(sel: string[]) => console.log("Aplicar Período:", sel)}
                onCancel={() => toggleFilter("periodo")}
                idPrefix="periodo"
              />
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleFilter("status")}
            className={buttonClasses}
            aria-expanded={openFilters.includes("status")}
          >
            <span>Status</span>
            <span className={`ml-2 transition-transform ${openFilters.includes("status") ? "rotate-90" : ""}`}>
              ▼
            </span>
          </button>
          {openFilters.includes("status") && (
            <div className="absolute top-full mt-1 z-10">
              <FiltroCheckboxList
                title="Status"
                options={STATUS_LIST}
                onApply={(sel: string[]) => console.log("Aplicar Status:", sel)}
                onCancel={() => toggleFilter("status")}
                idPrefix="status"
                spacing="space-y-6"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
