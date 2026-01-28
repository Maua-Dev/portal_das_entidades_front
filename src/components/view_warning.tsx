import { IoClose } from "react-icons/io5";
import Button from "./button";
import { useDeleteWarning } from "../hooks/use-warning";

interface ViewWarningModalProps {
  warning_id: string;
  title: string;
  date: string;
  description: string;
  onClose: () => void;
}

export default function ViewWarningModal({
  warning_id,
  title,
  date,
  description,
  onClose,
}: ViewWarningModalProps) {
  const { mutate: deleteWarning, isPending } = useDeleteWarning();

  function handleDelete() {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este aviso?",
    );

    if (!confirmDelete) return;
    console.log("Deleting warning with ID:", warning_id);
    deleteWarning(warning_id, {
      onSuccess: () => {
        onClose();
      },
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-2xl rounded-2xl bg-purple-200 p-6">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600"
        >
          <IoClose size={20} />
        </button>

        <h2 className="text-center text-3xl font-semibold text-gray-600">
          {title}
        </h2>

        <hr className="my-4 border-gray-400" />

        <p className="text-center text-gray-600 font-medium">
          Data limite: {date}
        </p>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex justify-end gap-3">
          {/* <Button
            onClick={onClose}
            className="bg-purple-300 text-gray-700 hover:bg-purple-400"
          >
            Fechar
          </Button> */}

          <Button
            onClick={handleDelete}
            disabled={isPending}
            className="bg-purple-800 text-white hover:bg-purple-900"
          >
            {isPending ? "Excluindo..." : "Excluir"}
          </Button>
        </div>
      </div>
    </div>
  );
}
