"use client"

import { createContext, useContext, useState } from "react";

const default_user = {
  name: "Lisa Maria",
  email: "lisa@mail.com",
  avatar: "/avatar-placeholder.svg"
}

type User = {
  name: string;
  email: string;
  avatar: string;
}

type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login() {
    setUser(default_user);
    localStorage.setItem("user", JSON.stringify(default_user));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}