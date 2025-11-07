import { useState } from "react";
import EntidadesButtons from "../components/Entity_buttons";
import SetColors from "../components/set_colors";
import ProfileButton from "../components/profile";
import { useMsal } from "@azure/msal-react";
import { useAuthUser } from "../hooks/use-user";

export default function Entities() {
  const [isColorido, setIsColorido] = useState(true);

  const { instance } = useMsal();

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("accessToken");
    instance.logoutRedirect({ postLogoutRedirectUri: "/" }).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  useAuthUser();

  return (
    <div className="relative min-h-screen bg-blue-100 flex items-center justify-center">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-20 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        logout
      </button>
      {/* loading mask */}
      {/* {<div className="absolute inset-0 bg-gray-500 opacity-75">
        <div className="flex items-center justify-center h-full">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      </div>} */}
      <SetColors isColorido={isColorido} setIsColorido={setIsColorido} />
      <EntidadesButtons
        isColorido={isColorido}
        size={{ width: "w-48", height: "h-48" }}
      />
      <ProfileButton className="bg-blue-950"></ProfileButton>
    </div>
  );
}
