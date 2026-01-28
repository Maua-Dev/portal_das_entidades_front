import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-purple-400 px-5 py-1.5 text-sm font-medium text-white transition hover:bg-purple-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
