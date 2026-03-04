import { useEffect, useState } from "react";
import ArrowButton from "../components/arrow";
import { Link } from "react-router-dom";
import homeBackGround from "../assets/home-bg.jpg";
import CustomModal from "../components/custom-modal";
import {
  useAllUsers,
  useAuthUser,
  useCreateUser,
  useDeleteUser,
} from "../hooks/use-user";
import { useUsers } from "../context/user-context";
import { FaSpinner } from "react-icons/fa6";

export default function MemberManagement() {
  const [createOpen, setCreateOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("");
  const [newUserEntity, setNewUserEntity] = useState("");
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);

  const { data, refetch } = useAllUsers();
  const { users, loadFromPayload } = useUsers();
  const { mutate: createUser, isPending: isCreating } = useCreateUser();
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();
  const { data: authUser } = useAuthUser();

  useEffect(() => {
    if (data) {
      loadFromPayload(data);
    }
  }, [data, loadFromPayload]);

  const members = users.filter(
    (user) =>
      (user.role === "PRESIDENT" || user.role === "ADMIN") &&
      user.email !== authUser?.user.email,
  );

  console.log("All users:", members);
  console.log("Auth user:", authUser.user);

  const handleCreate = () => {
    // Lógica para criar um novo membro
    createUser({
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      organization: newUserEntity,
    });
    refetch();
    setCreateOpen(false);
    setNewUserName("");
    setNewUserEmail("");
    setNewUserRole("");
    setNewUserEntity("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center"
      style={{ backgroundImage: `url(${homeBackGround})` }}
    >
      <Link to="/entidades" className="absolute top-6 left-6 z-50">
        <ArrowButton />
      </Link>

      {(isCreating || isDeleting) && (
        <div className="h-screen w-screen fixed bg-black opacity-50">
          <FaSpinner className="animate-spin text-white text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}

      <CustomModal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Adicionar Novo Membro"
      >
        <div className="flex flex-col gap-3">
          <input
            className="border rounded px-3 py-2"
            type="text"
            name="name"
            placeholder="Nome"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <input
            className="border rounded px-3 py-2"
            type="email"
            name="email"
            placeholder="E-mail"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <select
              className="border rounded px-3 py-2 w-1/2"
              name="role"
              id="role"
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
            >
              <option value="">Selecione o cargo</option>
              <option value="USER">Membro</option>
              <option value="ADMIN">Administrador</option>
              <option value="PRESIDENT">Presidente</option>
            </select>
            <select
              name="entity"
              id="entity"
              className="border rounded px-3 py-2 w-1/2"
              value={newUserEntity}
              onChange={(e) => setNewUserEntity(e.target.value)}
            >
              <option value="">Selecione a entidade</option>
              <option value="DEV">Dev Community Mauá</option>
              <option value="NAWAT">Nawat</option>
              <option value="ESPORTS">eSports</option>
              <option value="META">Meta</option>
              <option value="GUARDIAN">Guardian</option>
            </select>
          </div>
          <button
            className="bg-purple-700 duration-200 hover:cursor-pointer text-white rounded-2xl px-4 py-2 mt-2 hover:bg-purple-900"
            onClick={handleCreate}
          >
            Adicionar
          </button>
        </div>
      </CustomModal>

      <CustomModal
        isOpen={userIdToDelete !== null}
        onClose={() => setUserIdToDelete(null)}
        title="Confirmar Remoção"
      >
        <div className="flex flex-col gap-4">
          <p>Tem certeza que deseja remover este membro?</p>
          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
              onClick={() => setUserIdToDelete(null)}
            >
              Cancelar
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              onClick={() => {
                if (userIdToDelete) {
                  deleteUser(userIdToDelete);
                }
                setUserIdToDelete(null);
              }}
            >
              Remover
            </button>
          </div>
        </div>
      </CustomModal>

      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-3/4 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-semibold mb-4">Lista de membros</h2>
          <button
            onClick={() => setCreateOpen(true)}
            className="p-2 bg-purple-400 hover:bg-purple-600 rounded-2xl px-4 hover:cursor-pointer text-white text-2xl font-bold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            +
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2">Nome</th>
              <th className="pb-2">E-mail</th>
              <th className="pb-2">Cargo</th>
              <th className="pb-2">Entidade</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.user_id} className="border-t">
                <td className="py-2">{member.name}</td>
                <td className="py-2">{member.email}</td>
                <td className="py-2">{member.role}</td>
                <td className="py-2">{member.organization}</td>
                <td className="py-2">
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => setUserIdToDelete(member.user_id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  Nenhum membro cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
