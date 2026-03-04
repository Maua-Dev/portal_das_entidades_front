/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Role = "USER" | "PRESIDENT" | "ADMIN" | string;
export type ORG = "NAWAT" | "DEV" | "ESPORTS" | "META" | "GUARDIAN" | string;

export interface Warning {
  warning_id: number;
  target_role: Role;
  target_org: ORG;
  title: string;
  expire: number;
  description: string;
}
/* Define o q é um warning */

export interface WarningsPayload {
  warnings: Warning[];
  created_at: number;
  message?: string;
}
/*Defini o q volta da request ou o q vai ir*/

export interface WarningsContextValue {
  warnings: Warning[];
  setWarnings: (warnings: Warning[]) => void;
  addWarning: (warning: Warning) => void;
  removeWarning: (warningId: number) => void;
  loadFromPayload: (payload: WarningsPayload) => void;
}

/* O é tem no context*/

const WarningsContext = createContext<WarningsContextValue | undefined>(
  undefined,
);
export function WarningsProvider({ children }: { children: ReactNode }) {
  const [warnings, setWarnings] = useState<Warning[]>([]);
  function addWarning(warning: Warning) {
    setWarnings((prev) => [...prev, warning]);
  }
  function removeWarning(warningId: number) {
    setWarnings((prev) => prev.filter((w) => w.warning_id !== warningId));
  }
  function loadFromPayload(payload: WarningsPayload) {
    setWarnings(payload.warnings);
  }
  return (
    <WarningsContext.Provider
      value={{
        warnings,
        setWarnings,
        addWarning,
        removeWarning,
        loadFromPayload,
      }}
    >
      {children}
    </WarningsContext.Provider>
  );
}
export function useWarnings() {
  const context = useContext(WarningsContext);
  if (context === undefined) {
    throw new Error("useWarnings must be used within a WarningsProvider");
  }
  return context;
}
