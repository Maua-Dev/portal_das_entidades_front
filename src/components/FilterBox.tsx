import React from "react";

type QuadroFiltroProps = {
  title: string;
  onApply: () => void;
  onCancel: () => void;
  onClear: () => void;
  children: React.ReactNode; 
  className?: string;        
};

export default React.memo(function FilterBox({ 
  title,
  onApply,
  onCancel,
  onClear,
  children,
  className = "",
}: QuadroFiltroProps) {
  return (
    <div
      className={`w-full max-w-sm rounded-2xl z-40 bg-[#d9e6f5] shadow-lg p-3 ${className}`} 
    >
      <div className="mb-3 flex items-center justify-between"> 
        <h2 className="text-xl font-bold text-gray-800">{title}</h2> 
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-white" 
        >
          Limpar
        </button>
      </div>
      <div className="max-h-48 overflow-y-auto pr-2"> 
        {children}
      </div>
      <div className="mt-3 flex items-center justify-between"> 
        <button
          type="button"
          onClick={onCancel}
          className="w-32 rounded-xl bg-white/70 px-3 py-1 text-center text-sm font-medium text-gray-600 hover:bg-white"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={onApply}
          className="w-32 rounded-xl bg-white/90 px-3 py-1 text-center text-sm font-semibold text-gray-700 hover:bg-white" 
        >
          Aplicar
        </button>
      </div>
    </div>
  );
});