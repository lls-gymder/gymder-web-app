import { IBaseUser, ISignInRequest, ISignUpRequest } from '../interfaces';

export type AuthContextType = {
  user: IBaseUser | undefined;
  isAuthenticated: boolean;
  signin: (data: ISignInRequest) => void;
  signup: (data: ISignUpRequest) => void;
  signout: () => void;
};