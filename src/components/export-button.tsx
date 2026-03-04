import { HiUpload } from "react-icons/hi";
import { useExportUsers } from "../hooks/use-user";

interface ExportButtonProps {
  label?: string;
  className?: string;
  iconSize?: number;
  onClick?: () => void;
}

export default function ExportButton({
  label = "Exportar",
  className = "",
  iconSize = 20,
}: ExportButtonProps) {
  const { data: exportUsers } = useExportUsers();

  function handleClick() {
    console.log("Exporting users...");
    console.log("Users exported.", exportUsers);
    downloadExcel(exportUsers!);
  }

  function downloadExcel(attachment: { file_base64: string }) {
    const linkSource = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${attachment.file_base64}`;
    const downloadLink = document.createElement("a");
    const fileName = `exported_users.xlsx`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  return (
    <div
      className={`inline-flex items-center gap-1 ${className} bg-gray-400 hover:bg-gray-500 transition-colors duration-200 px-2 rounded-2xl cursor-pointer`}
    >
      <span className="text-sm font-medium text-white">{label}</span>

      <button
        type="button"
        className="py-2 pl-1 rounded-full text-white active:scale-95 transition"
        aria-label={label}
        onClick={handleClick}
      >
        <HiUpload size={iconSize} className="cursor-pointer" />
      </button>
    </div>
  );
}
