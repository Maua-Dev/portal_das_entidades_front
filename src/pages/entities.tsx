import EntidadesButtons from "../components/Entity_buttons";
import AdminButton from "../components/admin_button";
import ProfileButton from "../components/profile";
import { useMsal } from "@azure/msal-react";
import { useAuthUser } from "../hooks/use-user";
import { useEffect } from "react";
import { useUsers } from "../context/user-context";
import { PiNewspaperLight } from "react-icons/pi";
import { MdPhoneAndroid } from "react-icons/md";

export default function Entities() {
  const { instance } = useMsal();

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("accessToken");
    instance.logoutRedirect({ postLogoutRedirectUri: "/" }).catch((error) => {
      console.error("Logout error:", error);
    });
  };
  const { data } = useAuthUser();
  const { profile, uploadProfile } = useUsers();

  useEffect(() => {
    if (data) {
      uploadProfile(data.user);
    }
  }, [data, uploadProfile]);

  if (!profile) {
    return (
      <div className="relative min-h-screen bg-blue-100 gap-10 flex items-center justify-center">
        <div className="text-9xl  duration-300 animate-bounce ">.</div>
        <div
          className="text-9xl  duration-300 animate-bounce "
          style={{ animationDelay: "150ms" }}
        >
          .
        </div>
        <div
          className="text-9xl  duration-300 animate-bounce "
          style={{ animationDelay: "300ms" }}
        >
          .
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-blue-100 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="absolute top-24 right-4 flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-5 py-2 rounded-full shadow-lg hover:from-red-600 hover:to-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 hover:cursor-pointer"
        title="Sair da conta"
      >
        Sair
      </button>
      {profile.role === "ADM" && (
        <div className="flex gap-10 text-white">
          <AdminButton
            title="Permissão"
            subtitle="Gerencie permissões"
            icon={<PiNewspaperLight size={60} />}
            to="/admin/member"
          />
          <AdminButton
            title="Consulta"
            subtitle="Consultar dados"
            icon={<MdPhoneAndroid size={50} />}
            to="/home/:entityId"
          />
        </div>
      )}
      {profile.role === "PRESIDENT" && (
        <EntidadesButtons
          isAdmin={false}
          organization={profile.organization || ""}
          size={{ width: "w-48", height: "h-48" }}
        />
      )}
      <ProfileButton className="bg-blue-950" />
    </div>
  );
}
