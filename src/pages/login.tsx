import { useNavigate } from "react-router-dom";
import LoginBG from "../assets/login-bg.jpg";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../auth/auth-config";
import Logo_PE from "../assets/Logo_PE.png";

export default function HomePage() {
  const { instance } = useMsal();
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();

  const fetchAccessToken = async () => {
    const accounts = instance.getAllAccounts();
    const accessToken = (
      await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
    ).accessToken;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  };

  if (isAuth) {
    fetchAccessToken();
    console.log("User is authenticated, navigating to /entidades");
    navigate("/entidades");
  }

  const handleLogin = () => {
    instance.loginPopup({ scopes: ["User.Read"] }).catch((error) => {
      console.error("Login error:", error);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex flex-col md:flex-row h-screen">
        {/* Left Section - Logo Placeholder */}
        <div
          className="w-full md:w-1/2 h-full flex items-center justify-center p-8 bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${LoginBG})` }}
        >
          <div className="text-center">
            <img src={Logo_PE} alt="Logo PE" className="max-h-96" />
          </div>
        </div>

        {/* Right Section - Microsoft Login Area */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Microsoft Login
            </h2>
            <p className="text-gray-600 mb-6">
              Ao clicar no botão abaixo, você será redirecionado para a página
              de login da Microsoft
            </p>
            <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors duration-300 w-full cursor-pointer">
              <button
                className="text-gray-400 cursor-pointer"
                onClick={handleLogin}
              >
                Microsoft login
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
