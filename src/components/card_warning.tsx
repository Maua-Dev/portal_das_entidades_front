import React from "react";

interface WarningProps {
  title: string;
  date: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Warning: React.FC<WarningProps> = ({
  title,
  date,
  description,
  buttonLabel = "Open",
  onButtonClick,
}) => {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-purple-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600">
        <span className="font-medium">(Descrição)</span> {description}
      </p>

      {/* Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={onButtonClick}
          className="rounded-full bg-purple-400 px-5 py-1.5 text-sm font-medium text-white transition hover:bg-purple-500"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Warning;
