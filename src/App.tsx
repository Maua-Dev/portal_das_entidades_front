import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Entities from "./pages/entities.tsx";
import Home from "./pages/home.tsx";
import Member from "./pages/member.tsx";
import { msalInstance } from "./auth/auth-config.ts";
import { MsalProvider } from "@azure/msal-react";
import { UsersProvider } from "./context/user-context.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <MsalProvider instance={msalInstance}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/entidades" element={<Entities />} />
            <Route path="/home/:entityId" element={<Home />}></Route>
            <Route path="/admin/member" element={<Member />}></Route>
          </Routes>
        </MsalProvider>
      </UsersProvider>
    </BrowserRouter>
  );
}
