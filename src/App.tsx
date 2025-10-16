import { Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Entities from "./pages/entities.tsx";
import Home from "./pages/home.tsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/entidades" element={<Entities />} />
        <Route path="/home/:entityId" element={<Home />}></Route>
      </Routes>
    </div>
  );
}


