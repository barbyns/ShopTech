import { createContext, useContext, useState, useEffect } from 'react';

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
  const [token, setToken] = useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const savedToken = localStorage.getItem('jwtToken');
    const savedRoles = localStorage.getItem('userRoles');

    if (savedToken) setToken(savedToken);
    if (savedRoles) {
      try {
        setRoles(JSON.parse(savedRoles));
      } catch {
        setRoles([]);
      }
    }
  }, []);

  const login = (newToken: string, newRoles: string[]) => {
    setToken(newToken);
    setRoles(newRoles);
    localStorage.setItem('jwtToken', newToken);
    localStorage.setItem('userRoles', JSON.stringify(newRoles));
  };

  const logout = () => {
    setToken(null);
    setRoles([]);
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userRoles');
  };

  const isAdmin = roles.includes('ROLE_ADMIN');
  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ token, roles, login, logout, isLoggedIn, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
