import Button from "../components/button";

interface CreateWarningCardProps {
  onCreate: () => void;
}

export default function CreateWarningCard({
  onCreate,
}: CreateWarningCardProps) {
  return (
    <div className="rounded-2xl bg-purple-100 p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-500">Inserir novo...</h3>

        <textarea
          placeholder="Inserir descrição..."
          className="mt-3 w-full resize-none rounded-lg bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
          rows={3}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          onClick={onCreate}
          className="bg-purple-400 text-white hover:bg-purple-500"
        >
          Criar
        </Button>
      </div>
    </div>
  );
}
