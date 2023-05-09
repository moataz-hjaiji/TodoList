import { createContext, useState, FC, ReactNode } from 'react';

interface AuthContextProps {
  auth: any;
  setAuth: any;
}

export const AuthContext = createContext<AuthContextProps>({
  auth: {},
  setAuth: () => {},
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
