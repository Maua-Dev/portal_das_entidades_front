import { IoClose } from "react-icons/io5";
import { useState } from "react";
import WarningCard from "./card_warning";
import CreateWarningCard from "./create_warning";
import NewWarningModal from "./create_warning_modal";
import ViewWarningModal from "./view_warning";
import { useAllWarnings } from "../hooks/use-warning";
import { useUsers } from "../context/user-context";

interface Warning {
  warning: {
    warning_id: string;
    body: {
      title: string;
      expire: number;
      description: string;
    };
  };
}

interface WarningsModalProps {
  onClose: () => void;
}

export default function WarningsModal({ onClose }: WarningsModalProps) {
  const { profile } = useUsers();
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

          <h2 className="mb-6 text-center text-3xl font-bold text-black">
            Avisos
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* CARD DE CRIAÇÃO */}
            {profile?.role === "ADM" && (
              <CreateWarningCard onCreate={() => setNewWarningOpen(true)} />
            )}
            {/* LISTA */}
            {isLoading ? (
              <p className="text-gray-400">Carregando avisos...</p>
            ) : (
              warnings.map((warning) => (
                <WarningCard
                  key={warning.warning.warning_id}
                  title={warning.warning.body.title}
                  date={new Date(
                    warning.warning.body.expire,
                  ).toLocaleDateString()}
                  description={warning.warning.body.description}
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
      {profile?.role === "ADM" && (
        <NewWarningModal
          isOpen={newWarningOpen}
          onClose={() => setNewWarningOpen(false)}
        />
      )}

      {/* MODAL DE VISUALIZAÇÃO */}
      {selectedWarning && (
        <ViewWarningModal
          warning_id={selectedWarning.warning.warning_id}
          onClose={() => setSelectedWarning(null)}
          title={selectedWarning.warning.body.title}
          date={new Date(
            selectedWarning.warning.body.expire,
          ).toLocaleDateString()}
          description={selectedWarning.warning.body.description}
        />
      )}
    </>
  );
}
