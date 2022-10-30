import { IBaseUser } from './user';

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISigninResponse {
  user: IBaseUser;
  token: string;
}