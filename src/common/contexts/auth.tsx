import { createContext, ReactNode, useEffect, useState } from 'react';

import { AuthContextType, IFullUser, ISignInRequest, ISignUpRequest, LocalStorageKeys } from 'Common/models';
import { ReadUserService, SigninService, SignupService } from 'Common/services';
import { useRouter } from 'next/router';


type Props = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: Props) {
  const router = useRouter();
  const [ user , setUser ] = useState<IFullUser | undefined>();

  const isAuthenticated = user !== undefined;


  useEffect(() => {
    const storageToken = localStorage.getItem(LocalStorageKeys.userToken);

    if (storageToken) 
      readUser();
    else if(!isAuthenticated)
      router.push('/');
    
  }, [user])
  
  const readUser = async() => {
    ReadUserService()
      .then(result => { 
        if (result)
          setUser(result) 
      })
      .catch(() => {
        router.push('/');
      })
  }

  const signin = async ({email, password}: ISignInRequest) => {
    await SigninService({
      email,
      password
    }).then(async ({user, token}) => {
      localStorage.setItem(LocalStorageKeys.userToken, token);

      setUser(user);
    });
  }

  const signup = async ({name, email, password}: ISignUpRequest) => {
    await SignupService({
      name,
      email,
      password
    }).then();
  }

  const signout = () => {
    setUser(undefined);
  }

  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated,
        signin,
        signout,
        signup
      }}>
      {children}
    </AuthContext.Provider>
  )
}