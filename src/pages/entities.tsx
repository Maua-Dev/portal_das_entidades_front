import { useState } from "react";
import EntidadesButtons from "../components/Entity_buttons";
import SetColors from "../components/set_colors";

export default function Entities() {
  const [isColorido, setIsColorido] = useState(true);

  return (
    <div className="relative min-h-screen bg-slate-100 flex items-center justify-center">
      <SetColors isColorido={isColorido} setIsColorido={setIsColorido} />
      <EntidadesButtons isColorido={isColorido} />
    </div>
  );
}