import React, { useRef, useState } from "react";

interface ImportFormProps {
  onFileImport?: (file: File) => void;
}

export default function ImportForm({ onFileImport }: ImportFormProps) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      onFileImport?.(file);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onFileImport?.(file);
    }
  }

  return (
    <div>
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
          dragActive
            ? "border-purple-500 bg-purple-50"
            : "border-gray-300 bg-white"
        }`}
        style={{ cursor: "pointer" }}
      >
        <input
          ref={inputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <div
          onClick={() => inputRef.current?.click()}
          style={{ minHeight: "100px" }}
        >
          {fileName ? (
            <span className="text-green-600 font-semibold">
              Arquivo selecionado: {fileName}
            </span>
          ) : (
            <span className="text-gray-500">
              Arraste um arquivo aqui ou clique para selecionar
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
