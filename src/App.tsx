import { Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Entities from "./pages/entities.tsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/entidades" element={<Entities />} />
      </Routes>
    </div>
  );
}


