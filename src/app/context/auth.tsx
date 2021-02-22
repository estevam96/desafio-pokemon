import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} from 'react';
import Crypto from 'crypto-js';

interface Props {
  children: React.ReactNode;
}

interface AuthContextData {
  token: string | null;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  token: localStorage.getItem('token'),
  login: () => null,
  logout: () => null
});

const ProvideAuth: React.FC<Props> = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = () => {
    const tokenHash = Crypto.SHA256('tokendeautenticacao').toString();
    setToken(tokenHash);
    localStorage.setItem('token', tokenHash);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };
  const authValue = useMemo(() => ({ token, login, logout }), [token]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => useContext(AuthContext);

export default ProvideAuth;
