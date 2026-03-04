import { BiSolidBellRing } from "react-icons/bi";

interface BellButtonProps {
  className?: string;
  iconSize?: number;
  onClick?: () => void;
}

export default function BellButton({
  className = "",
  iconSize = 20,
  onClick,
}: BellButtonProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${className} bg-gray-400 hover:bg-gray-500 transition-colors duration-200 px-6 rounded-2xl cursor-pointer`}
    >
      <button
        type="button"
        onClick={onClick}
        className="py-2 rounded-full text-white active:scale-95 transition"
      >
        <BiSolidBellRing size={iconSize} />
      </button>
    </div>
  );
}
