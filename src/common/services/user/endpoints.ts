import { usersApi, protectedUsersApi } from './api';
import { ISignUpRequest, ISignInRequest, ISignupResponse, ISigninResponse, LocalStorageKeys, IFullUser } from 'Common/models';

export async function SignupService(data: ISignUpRequest): Promise<ISignupResponse> {
  return await usersApi.post<ISignupResponse>('/', data).then(result => result.data);
}

export async function SigninService(data: ISignInRequest): Promise<ISigninResponse> {
  return await usersApi.post<ISigninResponse>('/auth', data).then(result => result.data);
}

export async function ReadUserService(): Promise<IFullUser | undefined | void> {
  const userToken = localStorage.getItem(LocalStorageKeys.userToken);

  if (userToken)
    return await protectedUsersApi.get<IFullUser>('/')
      .then(result => result.data)
      .catch(() => {
        localStorage.removeItem(LocalStorageKeys.userToken)
      })

  return undefined;
}