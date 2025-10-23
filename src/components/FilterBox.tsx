import React from "react";

type QuadroFiltroProps = {
  title: string;
  onApply: () => void;
  onCancel: () => void;
  onClear: () => void;
  children: React.ReactNode; // lista de checkboxes
  className?: string;        // opcional para ajustes finos (ex.: posição, escala)
};

export default React.memo(function FilterBox({ // Adicionado React.memo para performance
  title,
  onApply,
  onCancel,
  onClear,
  children,
  className = "",
}: QuadroFiltroProps) {
  return (
    <div
      className={`w-full max-w-sm rounded-2xl z-40 bg-[#d9e6f5] shadow-lg p-3 ${className}`} // Reduzido de max-w-md para max-w-sm (384px), p-5 para p-3
    >
      {/* cabeçalho */}
      <div className="mb-3 flex items-center justify-between"> {/* Reduzido de mb-4 para mb-3 */}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2> {/* Reduzido de text-3xl para text-xl */}

        {/* botão limpar (substitui a barra de pesquisa) */}
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-white" // Reduzido de px-4 py-2 para px-3 py-1
        >
          Limpar
        </button>
      </div>

      {/* lista com scroll interno */}
      <div className="max-h-48 overflow-y-auto pr-2"> {/* Reduzido de max-h-72 para max-h-48 (192px) */}
        {children}
      </div>

      {/* rodapé */}
      <div className="mt-3 flex items-center justify-between"> {/* Reduzido de mt-5 para mt-3 */}
        <button
          type="button"
          onClick={onCancel}
          className="w-32 rounded-xl bg-white/70 px-3 py-1 text-center text-sm font-medium text-gray-600 hover:bg-white" // Reduzido de w-40 px-4 py-2 para w-32 px-3 py-1
        >
          Cancelar
        </button>

        <button
          type="button"
          onClick={onApply}
          className="w-32 rounded-xl bg-white/90 px-3 py-1 text-center text-sm font-semibold text-gray-700 hover:bg-white" // Reduzido de w-40 px-4 py-2 para w-32 px-3 py-1
        >
          Aplicar
        </button>
      </div>
    </div>
  );
});