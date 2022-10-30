export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISigninResponse {
  user: {
    name: string,
    email: string,
  },
  token: string,
}