// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import homeBackGround from "../assets/home-bg.jpg";
import ProfileButton from "../components/profile";
import ArrowButton from "../components/arrow";
import { Link } from "react-router-dom";
import AddButton from "../components/add-button";
import ImportButton from "../components/import-button";
import ExportButton from "../components/export-button";
import BellButton from "../components/bell-button";
import SearchBar from "../components/search-bar";
import FiltersBar from "../components/FilterBar";
import { COURSES } from "../utils/enums/course";
import { useUsers } from "../context/user-context";
import { useAllUsers } from "../hooks/use-user";
import CustomModal from "../components/custom-modal";
import ImportForm from "../components/import-form";
import { useUploadUsers } from "../hooks/use-user";

export default function Home() {
  // const { entityId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const [importFormOpen, setImportFormOpen] = useState<boolean>(false);

  const { data, isLoading } = useAllUsers();

  const { users, loadFromPayload } = useUsers();

  const { mutate: uploadUsers } = useUploadUsers();

  useEffect(() => {
    if (data) {
      loadFromPayload(data);
    }
  }, [data, loadFromPayload]);

  const handleFileImport = (file: File) => {
    uploadUsers(file);
    setImportFormOpen(false);
  };

  const alunosFiltrados = users.filter(
    (aluno) =>
      aluno.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aluno.ra.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: `url(${homeBackGround})` }}
    >
      <CustomModal
        isOpen={importFormOpen}
        onClose={() => setImportFormOpen(false)}
        title={"Importar Dados"}
      >
        <ImportForm onFileImport={handleFileImport} />
      </CustomModal>
      <ProfileButton></ProfileButton>
      <Link to="/entidades">
        <ArrowButton></ArrowButton>
      </Link>

      <div className="absolute top-28 inset-x-6 max-w-5/6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <AddButton />
            <ImportButton onClick={() => setImportFormOpen(true)} />
            <ExportButton />
          </div>
          <BellButton />
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
            <FiltersBar />
          </div>
        </div>
        <div className="mt-4 bg-white rounded-3xl shadow overflow-y-auto px-6 max-h-[70vh]">
          <table className="min-w-full">
            <thead className="bg-gray-50 sticky top-0 shadow-[0_2px_0_0_rgba(209,213,219,1)]">
              <tr>
                <th className="w-4/12 px-6 pt-4 pb-6 text-left font-bold text-gray-400 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 pt-4 pb-6 text-center font-bold text-gray-400 uppercase tracking-wider">
                  RA
                </th>
                <th className="px-6 pt-4 pb-6 text-center font-bold text-gray-400 uppercase tracking-wider">
                  Curso
                </th>
                <th className="px-6 pt-4 pb-6 text-center font-bold text-gray-400 uppercase tracking-wider">
                  Período
                </th>
                <th className="px-6 pt-4 pb-6 text-center font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 pt-4 pb-6 text-center font-bold text-gray-400 uppercase tracking-wider">
                  Entidade
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {alunosFiltrados.length > 0 ? (
                alunosFiltrados.map((aluno) => (
                  <tr key={aluno.ra}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {aluno.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {aluno.ra}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {COURSES[aluno.course as keyof typeof COURSES]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {aluno.year}º período
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <select
                        value={aluno.state ?? ""}
                        onChange={() => {}}
                        className={`px-2 py-2 text-xs text-center font-semibold rounded-full w-28 leading-5 
                                                cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105
                                                ${
                                                  aluno.state === "PASSOU"
                                                    ? "bg-green-100 text-green-800"
                                                    : aluno.state ===
                                                      "NAO_PASSOU"
                                                    ? "bg-red-100 text-red-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                                }`}
                      >
                        <option
                          value="PASSOU"
                          className="bg-green-100 text-green-800"
                        >
                          PASSOU
                        </option>
                        <option
                          value="NAO_PASSOU"
                          className="bg-red-100 text-red-800"
                        >
                          NAO_PASSOU
                        </option>
                        <option
                          value="CONGELADO"
                          className="bg-yellow-100 text-yellow-800"
                        >
                          CONGELADO
                        </option>
                      </select>
                    </td>
                    <td className="py-4 whitespace-nowrap text-sm text-center">
                      <span className="bg-gray-200 px-3 py-2 rounded-full text-gray-700 inline-block w-32">
                        {aluno.organization}
                      </span>
                    </td>
                  </tr>
                ))
              ) : isLoading ? (
                <tr>
                  <td colSpan={6}>
                    <div className="max-w-xs mx-auto gap-10 flex items-center justify-center">
                      <div className="text-9xl duration-300 animate-bounce">
                        .
                      </div>
                      <div
                        className="text-9xl duration-300 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      >
                        .
                      </div>
                      <div
                        className="text-9xl duration-300 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      >
                        .
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-6 text-gray-400 italic"
                  >
                    Nenhum aluno encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
