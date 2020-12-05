import React, {createContext, useCallback, useContext, useState} from 'react';
import api from '../service/api';


interface UserProps {
  id: number;
  username: string;
  email: string;
}

interface LogarProps {
  email: string;
  password: string;
}

interface AuthState {
  jwt: string;
  user: UserProps;
}

interface AuthStateProps {
  user: UserProps;
  handleLogar(credentials: LogarProps): Promise<void>;
  handleLogout(): void;
}

const AuthContext = createContext<AuthStateProps>({} as AuthStateProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem('@yoncode:jwt');
    const user = localStorage.getItem('@yoncode:user');

    //valida o retorno
    if(jwt && user) {
      return { jwt, user: JSON.parse(user)}
    }

    return {} as AuthState;
  });

  const handleLogar = useCallback(async({email, password}) => {
    const response = await api.post('auth/local', {
      identifier: email,
      password
    })

    const { jwt, user } = response.data;
    
    console.log(user);

    localStorage.setItem('@yoncode:jwt', jwt);
    localStorage.setItem('@yoncode:user', JSON.stringify(user));

    setData({user, jwt});

  },[]); 

  const handleLogout = useCallback(() => {
    localStorage.removeItem('@yoncode:jwt');
    localStorage.removeItem('@yoncode:user');

    setData({} as AuthState);
  },[]);
  
  return (
    <AuthContext.Provider value={{user: data.user, handleLogar, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuth(): AuthStateProps {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth};