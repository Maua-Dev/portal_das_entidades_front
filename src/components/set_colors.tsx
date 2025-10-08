interface SetColorsProps {
  isColorido: boolean;
  setIsColorido: (value: boolean) => void;
}

export default function SetColors({ isColorido, setIsColorido }: SetColorsProps) {
  return (
    <button
      className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      onClick={() => setIsColorido(!isColorido)}
    >
      Alternar ({isColorido ? "Colorido" : "P&B"})
    </button>
  );
}