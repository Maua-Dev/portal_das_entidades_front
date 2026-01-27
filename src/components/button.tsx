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
      className={`px-6 py-2 rounded-lg text-sm font-medium transition active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
