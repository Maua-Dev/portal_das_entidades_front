import { useState } from "react";
import ArrowButton from "../components/arrow";
import { Link } from "react-router-dom";
import homeBackGround from "../assets/home-bg.jpg";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

const initialMembers: Member[] = [
  { id: "1", name: "João Silva", email: "joao@email.com", role: "Membro" },
  {
    id: "2",
    name: "Maria Souza",
    email: "maria@email.com",
    role: "Vice-presidente",
  },
];

export default function MemberManagement() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.email && newMember.role) {
      setMembers([
        ...members,
        { ...newMember, id: (Date.now() + Math.random()).toString() },
      ]);
      setNewMember({ name: "", email: "", role: "" });
    }
  };

  const handleRemoveMember = (id: string) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center py-10"
      style={{ backgroundImage: `url(${homeBackGround})` }}
    >
      <Link to="/entidades">
        <ArrowButton></ArrowButton>
      </Link>
      <h1 className="text-2xl font-bold text-gray-200 mb-6">Gerenciamento de Membros</h1>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl mb-8">
        <h2 className="text-lg font-semibold mb-4">Adicionar novo membro</h2>
        <div className="flex flex-col gap-3">
          <input
            className="border rounded px-3 py-2"
            type="text"
            name="name"
            placeholder="Nome"
            value={newMember.name}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-3 py-2"
            type="email"
            name="email"
            placeholder="E-mail"
            value={newMember.email}
            onChange={handleInputChange}
          />
          <select
            className="border rounded px-3 py-2"
            name="role"
            value={newMember.role}
            onChange={handleInputChange}
          >
            <option value="">Selecione o cargo</option>
            <option value="Membro">Membro</option>
            <option value="Vice-presidente">Vice-presidente</option>
            <option value="Presidente">Presidente</option>
          </select>
          <button
            className="bg-blue-700 text-white rounded px-4 py-2 mt-2 hover:bg-blue-900"
            onClick={handleAddMember}
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-4">Lista de membros</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2">Nome</th>
              <th className="pb-2">E-mail</th>
              <th className="pb-2">Cargo</th>
              <th className="pb-2"></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t">
                <td className="py-2">{member.name}</td>
                <td className="py-2">{member.email}</td>
                <td className="py-2">{member.role}</td>
                <td className="py-2">
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleRemoveMember(member.id)}
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
