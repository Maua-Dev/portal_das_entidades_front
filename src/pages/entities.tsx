import EntidadesButtons from "../components/Entity_buttons";
import ProfileButton from "../components/profile";
import { useMsal } from "@azure/msal-react";
import { useAuthUser } from "../hooks/use-user";
import { useEffect } from "react";
import { useUsers } from "../context/user-context";

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
      {/* loading mask */}
      {/* {<div className="absolute inset-0 bg-gray-500 opacity-75">
        <div className="flex items-center justify-center h-full">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      </div>} */}
      <EntidadesButtons
        isAdmin={profile.role === "ADM"}
        organization={profile.organization || ""}
        size={{ width: "w-48", height: "h-48" }}
      />
      <ProfileButton className="bg-blue-950" />
    </div>
  );
}
