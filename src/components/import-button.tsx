import { HiDownload } from 'react-icons/hi';

interface ImportButtonProps {
  label?: string;
  className?: string;
  iconSize?: number;
}


export default function ImportButton({
  label = "Importar",
  className = "",
  iconSize = 20,
}: ImportButtonProps) {
    return (
        <div className={`inline-flex items-center gap-1 ${className} bg-gray-400 px-2 rounded-2xl`}>
              <span className="text-sm font-medium text-white">{label}</span>
        
              <button
                type="button"
                className="py-1 pl-1 rounded-full text-white active:scale-95 transition"
                aria-label={label}
              >
                <HiDownload size={iconSize} />
              </button>
            </div>
    );
}