// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  token: string | null;
  roles: string[];
  login: (token: string, roles: string[]) => void;
  logout: () => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('jwtToken'));
  const [roles, setRoles] = useState<string[]>(() => {
    const saved = localStorage.getItem('userRoles');
    return saved ? JSON.parse(saved) : [];
  });

  const login = (token: string, roles: string[]) => {
    setToken(token);
    setRoles(roles);
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('userRoles', JSON.stringify(roles));
  };

  const logout = () => {
    setToken(null);
    setRoles([]);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userRoles');
  };

  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <AuthContext.Provider value={{ token, roles, login, logout, isLoggedIn: !!token, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
