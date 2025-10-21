import { useEffect, useState, useMemo } from "react";

type AdminMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mode?: "add" | "edit";
  entityLabel?: string;
  initialData?: {
    name: string;
    email: string;
    periodo: string;
    curso: string;
    ra: string;
    status: string;
  };
  onSubmit?: (data: {
    name: string;
    email: string;
    periodo: string;
    curso: string;
    ra: string;
    status: string;
  }) => void;
  onDelete?: () => void;
};

export default function AdminMemberModal({
  isOpen,
  onClose,
  mode = "add",
  entityLabel = "entidade",
  initialData,
  onSubmit,
  onDelete,
}: AdminMemberModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    periodo: "",
    curso: "",
    ra: "",
    status: "",
  });

  useEffect(() => {
    if (isOpen && mode === "edit" && initialData) {
      setForm(initialData);
    }
  }, [isOpen, mode, initialData]);

  const allFilled = useMemo(
    () => Object.values(form).every((v) => String(v).trim() !== ""),
    [form]
  );

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    if (allFilled && onSubmit) {
      onSubmit(form);
      onClose();
    }
  };

  if (!isOpen) return null;

  const periodos = ["1º período", "2º período", "3º período", "4º período"];
  const cursos = ["Eng. de Comp.", "Sist. de Info.", "Adm.", "Outros"];
  const statusList = ["Ativo", "Em pausa", "Inativo"];

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between px-6 pt-5">
            <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
              {entityLabel}
            </span>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100" aria-label="Fechar">
              ✕
            </button>
          </div>
          <div className="px-6 pb-4 pt-2">
            <label className="mb-2 block text-sm font-medium">
              Nome<span className="text-red-500">*</span>
              <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.name} onChange={handleChange("name")} placeholder="Digite o nome" />
            </label>
            <label className="mb-2 block text-sm font-medium">
              Email<span className="text-red-500">*</span>
              <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.email} onChange={handleChange("email")} placeholder="Digite o e-mail" />
            </label>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Período<span className="text-red-500">*</span>
                <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.periodo} onChange={handleChange("periodo")}>
                  <option value="">Selecione...</option>
                  {periodos.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium">
                RA<span className="text-red-500">*</span>
                <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.ra} onChange={handleChange("ra")} placeholder="XX.XXXXX-X" />
              </label>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Curso<span className="text-red-500">*</span>
                <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.curso} onChange={handleChange("curso")}>
                  <option value="">Selecione...</option>
                  {cursos.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium">
                Status<span className="text-red-500">*</span>
                <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={form.status} onChange={handleChange("status")}>
                  <option value="">Selecione...</option>
                  {statusList.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-b-2xl bg-gray-50 px-6 py-4">
            {mode === "edit" && onDelete && (
              <button type="button" onClick={onDelete} className="rounded-lg bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500" aria-label="Excluir entidade">
                Excluir
              </button>
            )}
            <button type="button" disabled={!allFilled} className={`rounded-lg px-5 py-2 text-sm font-semibold text-white transition ${allFilled ? "bg-green-600 hover:bg-green-700" : "bg-green-300 cursor-not-allowed"}`} onClick={handleSubmit}>
              {mode === "edit" ? "Salvar" : "Adicionar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}