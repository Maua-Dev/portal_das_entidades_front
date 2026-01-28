/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Role = "USER" | "PRESIDENT" | "ADM" | string;
export type State = "PENDING" | "APPROVED" | string;
export type Active = "ACTIVE" | "INACTIVE" | string;

export interface User {
  user_id: string;
  name: string;
  email: string;
  state: State;
  role: Role;
  active: Active;
  ra: string;
  course: string | null;
  year: number | null;
  organization?: string;
}

export interface UsersPayload {
  users: User[];
  message?: string;
}

export interface UsersContextValue {
  users: User[];
  profile: User | null;
  uploadProfile: (user: User) => void;
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (userId: string, patch: Partial<User>) => void;
  removeUser: (userId: string) => void;
  getUserById: (userId: string) => User | undefined;
  loadFromPayload: (payload: UsersPayload) => void;
  exportUsers: () => void;
}

const UsersContext = createContext<UsersContextValue | undefined>(undefined);

export function UsersProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  function uploadProfile(user: User) {
    setProfile(user);
  }

  function addUser(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  function updateUser(userId: string, patch: Partial<User>) {
    setUsers((prev) =>
      prev.map((u) => (u.user_id === userId ? { ...u, ...patch } : u)),
    );
  }

  function removeUser(userId: string) {
    setUsers((prev) => prev.filter((u) => u.user_id !== userId));
  }

  function getUserById(userId: string) {
    return users.find((u) => u.user_id === userId);
  }

  function loadFromPayload(payload: UsersPayload) {
    if (Array.isArray(payload.users)) {
      setUsers(payload.users);
    }
  }

  function exportUsers() {
    // This function can be implemented to trigger user export
    alert("Exporting users...");
  }

  const value: UsersContextValue = {
    profile,
    uploadProfile,
    users,
    setUsers,
    addUser,
    updateUser,
    removeUser,
    getUserById,
    loadFromPayload,
    exportUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export function useUsers() {
  const ctx = useContext(UsersContext);
  if (!ctx) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return ctx;
}

// Named exports only to avoid default-export related fast-refresh issues
// (intentionally no default export)
