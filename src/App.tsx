import { Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import EntidadesButtons from "./components/Entity_buttons.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/entidades" element={<EntidadesButtons />} />
      </Routes>
    </div>
  );
}


export default App;