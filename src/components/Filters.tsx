       import React, { useState, useCallback } from "react";
       import QuadroFiltro from "./FilterBox";

       type FiltroCheckboxListProps = {
         title: string;
         options: string[];
         onApply: (selected: string[]) => void;
         onCancel: () => void;
         idPrefix: string; // ex.: "curso", "periodo", "status"
         spacing?: string; // opcional, ex.: "space-y-4" ou "space-y-6"
       };

       export default React.memo(function Filters({
         title,
         options,
         onApply,
         onCancel,
         idPrefix,
         spacing = "space-y-4",
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
             <li key={opt} className="flex items-center gap-3">
               <input
                 id={`${idPrefix}-${opt}`}
                 type="checkbox"
                 checked={checked}
                 onChange={() => toggle(opt)}
                 className="h-5 w-5 rounded border-gray-400 text-gray-800 focus:ring-0"
               />
               <label htmlFor={`${idPrefix}-${opt}`} className="select-none text-lg text-gray-800">
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
           >
             <ul className={spacing} role="group" aria-label={`Selecionar ${title.toLowerCase()}`}>
               {options.map(renderOption)}
             </ul>
           </QuadroFiltro>
         );
       });
       