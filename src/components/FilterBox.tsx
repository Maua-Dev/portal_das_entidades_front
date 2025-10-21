// QuadroFiltro.tsx
import React from "react";

type QuadroFiltroProps = {
  title: string;
  onApply: () => void;
  onCancel: () => void;
  onClear: () => void;
  children: React.ReactNode; // lista de checkboxes
  className?: string;        // opcional para ajustes finos
};

export default function FilterBox({
  title,
  onApply,
  onCancel,
  onClear,
  children,
  className = "",
}: QuadroFiltroProps) {
  return (
    <div
      className={`w-full max-w-md rounded-2xl bg-[#d9e6f5] shadow-lg p-5 ${className}`}
    >
      {/* cabeçalho */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

        {/* botão limpar (substitui a barra de pesquisa) */}
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white"
        >
          Limpar
        </button>
      </div>

      {/* lista com scroll interno */}
      <div className="max-h-72 overflow-y-auto pr-2">
        {children}
      </div>

      {/* rodapé */}
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="w-40 rounded-xl bg-white/70 px-4 py-2 text-center text-sm font-medium text-gray-600 hover:bg-white"
        >
          Cancelar
        </button>

        <button
          type="button"
          onClick={onApply}
          className="w-40 rounded-xl bg-white/90 px-4 py-2 text-center text-sm font-semibold text-gray-700 hover:bg-white"
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}
