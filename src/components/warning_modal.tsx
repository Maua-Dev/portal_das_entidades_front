import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import WarningCard from "./card_warning";
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

  const { data, isLoading, refetch } = useAllWarnings();

  const warnings: Warning[] = data?.warnings ?? [];

  useEffect(() => {
    refetch();
  }, [newWarningOpen, selectedWarning]);

  return (
    <>
      {/* MODAL PRINCIPAL */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        onClick={onClose}
      >
        <div
          className="w-full relative max-w-3xl min-h-2/3 max-h-2/3 overflow-y-scroll rounded-2xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="mb-6 fixed text-center justify-between max-w-3xl rounded-t-2xl flex px-6 py-4 bg-white/80 backdrop-blur-sm w-full pr-10 text-3xl font-bold text-black">
            Avisos
            {profile?.role === "ADMIN" && (
              <button
                className="ml-4 inline-flex items-center rounded-full duration-200 hover:cursor-pointer bg-purple-400 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-600"
                onClick={() => setNewWarningOpen(true)}
              >
                +
              </button>
            )}
            <button
              onClick={onClose}
              className="absolute left-[96%] hover:cursor-pointer  text-gray-400 hover:text-gray-600"
            >
              <IoClose size={20} />
            </button>
          </h2>

          <div className="grid grid-cols-2 p-6 pt-20 gap-4 max-h-2/3">
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
      {profile?.role === "ADMIN" && (
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
