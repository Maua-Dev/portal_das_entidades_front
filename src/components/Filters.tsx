import React, { useState, useCallback } from "react";
import QuadroFiltro from "./FilterBox";

type FiltroCheckboxListProps = {
  title: string;
  options: string[];
  onApply: (selected: string[]) => void;
  onCancel: () => void;
  idPrefix: string; // ex.: "curso", "periodo", "status"
  spacing?: string; // opcional, ex.: "space-y-2" ou "space-y-3" (reduzido)
  className?: string; // Novo: para overrides de posição/escala no FiltersBar.tsx
};

export default React.memo(function FiltroCheckboxList({
  title,
  options,
  onApply,
  onCancel,
  idPrefix,
  spacing = "space-y-2", // Reduzido de "space-y-4" para compactar
  className = "",
}: FiltroCheckboxListProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((value: string) =>
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    ), []);

  const clear = useCallback(() => setSelected([]), []);

  const renderOption = (opt: string) => {
    const checked = selected.includes(opt);
    return (
      <li key={opt} className="flex items-center gap-2"> {/* Reduzido de gap-3 para gap-2 */}
        <input
          id={`${idPrefix}-${opt}`}
          type="checkbox"
          checked={checked}
          onChange={() => toggle(opt)}
          className="h-4 w-4 rounded border-gray-400 text-gray-800 focus:ring-0" // Reduzido de h-5 w-5 para h-4 w-4
        />
        <label htmlFor={`${idPrefix}-${opt}`} className="select-none text-base text-gray-800"> {/* Reduzido de text-lg para text-base */}
          {opt}
        </label>
      </li>
    );
  };

  return (
    <QuadroFiltro
      title={title}
      onApply={() => onApply(selected)}
      onCancel={onCancel}
      onClear={clear}
      className={className} // Passa className para FilterBox.tsx
    >
      <ul className={spacing} role="group" aria-label={`Selecionar ${title.toLowerCase()}`}>
        {options.map(renderOption)}
      </ul>
    </QuadroFiltro>
  );
});