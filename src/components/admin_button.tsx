import { Link } from "react-router-dom";

interface AdminButtonProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  to: string;
  disabled?: boolean;
}

export default function AdminButton({
  title,
  subtitle,
  icon,
  to,
  disabled = false,
}: AdminButtonProps) {
  const content = (
    <div
      className={`flex flex-col items-center justify-between rounded-3xl bg-[#273967] w-40 h-44 p-4 shadow-md ${
        disabled
          ? "opacity-60 cursor-not-allowed"
          : "hover:scale-105 transition"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="mb-2">{icon}</div>
        <span className="text-white text-base font-medium text-center">
          {title}
        </span>
      </div>
      <span className="text-xs text-gray-200 mt-2">{subtitle}</span>
      <span className="mt-2 text-xs text-gray-100 font-semibold">
        {disabled ? "Indisponível" : "Acessar"}
      </span>
    </div>
  );

  return disabled ? <div>{content}</div> : <Link to={to}>{content}</Link>;
}
