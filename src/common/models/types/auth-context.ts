import { IFullUser, ISignInRequest, ISignUpRequest } from '../interfaces';

export type AuthContextType = {
  user: IFullUser | undefined;
  isAuthenticated: boolean;
  signin: (data: ISignInRequest) => void;
  signup: (data: ISignUpRequest) => void;
  signout: () => void;
};