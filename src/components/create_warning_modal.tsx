import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./button";
import { useCreateWarning } from "../hooks/use-warning";
import type { Role, ORG } from "../types/types";

interface NewWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewWarningModal({
  isOpen,
  onClose,
}: NewWarningModalProps) {
  const [form, setForm] = useState<{
    title: string;
    expire: string;
    description: string;
    role: Role;
    org: ORG;
  }>({
    title: "",
    expire: "",
    description: "",
    role: "USER",
    org: "DEV",
  });

  const { mutate: createWarning, isPending } = useCreateWarning();

  if (!isOpen) return null;

  function dateStringToTimestamp(date: string): number {
    console.log("Converting date:", date);
    console.log("Type of date:", typeof date);
    const [year, month, day] = date.split("-").map(Number);
    return Math.floor(new Date(year, month - 1, day).getTime());
  }

  function handleSave() {
    const { title, expire, description, role, org } = form;

    if (!title || !expire || !description || !role || !org) {
      alert("Preencha todos os campos");
      return;
    }

    const expireTimestamp = dateStringToTimestamp(form.expire);

    createWarning(
      {
        title,
        expire: expireTimestamp,
        description,
        target_role: role,
        target_org: org,
      },
      {
        onSuccess: () => {
          setForm({
            title: "",
            expire: "",
            description: "",
            role: "USER",
            org: "DEV",
          });
          onClose();
        },
      },
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-blue-100 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={20} />
        </button>

        <h2 className="text-center text-3xl font-semibold text-blue-400">
          Novo Aviso
        </h2>

        <hr className="my-4 border-blue-300" />

        {/* FORM */}
        <div className="space-y-4">
          {/* Título + Data */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm text-blue-400">Título</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Inserir..."
                className="mt-1 w-full rounded-lg border border-blue-300 bg-transparent px-3 py-2 text-sm"
              />
            </div>

            <div className="w-40">
              <label className="text-sm text-blue-400">Data limite</label>
              <input
                type="date"
                value={form.expire}
                onChange={(e) => setForm({ ...form, expire: e.target.value })}
                placeholder="dd/mm/aaaa"
                className="mt-1 w-full rounded-lg border border-blue-300 bg-transparent px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Organização + Role */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm text-blue-400">Organização</label>
              <select
                value={form.org}
                onChange={(e) =>
                  setForm({ ...form, org: e.target.value as ORG })
                }
                className="mt-1 w-full rounded-lg border border-blue-300 bg-transparent px-3 py-2 text-sm"
              >
                <option value="DEV">DEV</option>
                <option value="NAWAT">NAWAT</option>
                <option value="ESPORTS">ESPORTS</option>
                <option value="META">META</option>
                <option value="GUARDIAN">GUARDIAN</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="text-sm text-blue-400">Role</label>
              <select
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value as Role })
                }
                className="mt-1 w-full rounded-lg border border-blue-300 bg-transparent px-3 py-2 text-sm"
              >
                <option value="USER">USER</option>
                <option value="PRESIDENT">PRESIDENT</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="text-sm text-blue-400">Descrição</label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={4}
              placeholder="Inserir..."
              className="mt-1 w-full resize-none rounded-lg border border-blue-300 bg-transparent px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex justify-end gap-3">
          <Button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400"
          >
            Cancelar
          </Button>

          <Button
            onClick={handleSave}
            disabled={isPending}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            {isPending ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
