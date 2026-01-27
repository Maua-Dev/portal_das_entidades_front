import { IoClose } from "react-icons/io5";
import { useState } from "react";
import WarningCard from "./card_warning";
import CreateWarningCard from "./create_warning";
import NewWarningModal from "./create_warning_modal";
import ViewWarningModal from "./view_warning";
import { useAllWarnings } from "../hooks/use-warning";

interface Warning {
  warning_id: string;
  title: string;
  expire: number;
  description: string;
}

interface WarningsModalProps {
  onClose: () => void;
}

export default function WarningsModal({ onClose }: WarningsModalProps) {
  const [newWarningOpen, setNewWarningOpen] = useState(false);
  const [selectedWarning, setSelectedWarning] = useState<Warning | null>(null);

  const { data, isLoading } = useAllWarnings();

  const warnings: Warning[] = data?.warnings ?? [];

  return (
    <>
      {/* MODAL PRINCIPAL */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl rounded-2xl bg-white p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoClose size={20} />
          </button>

          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-300">
            Avisos
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* CARD DE CRIAÇÃO */}
            <CreateWarningCard onCreate={() => setNewWarningOpen(true)} />

            {/* LISTA */}
            {isLoading ? (
              <p className="text-gray-400">Carregando avisos...</p>
            ) : (
              warnings.map((warning) => (
                <WarningCard
                  key={warning.warning_id}
                  title={warning.title}
                  date={warning.expire}
                  description={warning.description}
                  onButtonClick={() => {
                    setSelectedWarning(warning);
                    console.log("selectedWarning", selectedWarning);
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* MODAL DE CRIAR */}
      <NewWarningModal
        isOpen={newWarningOpen}
        onClose={() => setNewWarningOpen(false)}
      />

      {/* MODAL DE VISUALIZAÇÃO */}
      {selectedWarning && (
        <ViewWarningModal
          warning_id={selectedWarning.warning_id}
          onClose={() => setSelectedWarning(null)}
          title={selectedWarning.title}
          date={new Date(selectedWarning.expire).toLocaleDateString()}
          description={selectedWarning.description}
        />
      )}
    </>
  );
}
