import { createContext, ReactNode, useState } from 'react';

import { AuthContextType, IBaseUser, ISignInRequest, ISignUpRequest, LocalStorageKeys } from 'Common/models';
import { SigninService, SignupService } from 'Common/services';


type Props = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: Props) {
  const [ user , setUser ] = useState<IBaseUser | undefined>();

  const isAuthenticated = user !== undefined;

  const signin = async ({email, password}: ISignInRequest) => {
    await SigninService({
      email,
      password
    }).then(({user, token}) => {
      localStorage.setItem(LocalStorageKeys.userToken, token)

      setUser(user);
    });
  }

  const signup = async ({name, email, password}: ISignUpRequest) => {
    await SignupService({
      name,
      email,
      password
    }).then(console.log);
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