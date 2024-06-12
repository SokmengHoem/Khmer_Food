import { createContext, useContext, useState, ReactNode } from 'react';

export interface UserTypes {
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserTypes[];
  login: (username:string, password:string) => void;
  logout: () => void;
  register: (person:UserTypes) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserTypes[]>([])

  const login = (username: string, password: string) => {
    console.log("hi",username,password)
    const userOne = user.find(user => user.username === username && user.password === password);
    if (userOne) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    setIsAuthenticated(false);
  };
  const register = (person:UserTypes) => {
    setUser([...user,person])
    console.log(user)
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,user, login, logout,register }}>
      {children}
    </AuthContext.Provider>
  );
};
