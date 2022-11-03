import { api, protectedApi } from 'Common/services';
import { ISignUpRequest, ISignInRequest, ISignupResponse, ISigninResponse, LocalStorageKeys, IFullUser } from 'Common/models';

export async function SignupService(data: ISignUpRequest): Promise<ISignupResponse> {
  return await api.post<ISignupResponse>('/user', data).then(result => result.data);
}

export async function SigninService(data: ISignInRequest): Promise<ISigninResponse> {
  return await api.post<ISigninResponse>('/user/auth', data).then(result => result.data);
}

export async function ReadUserService(): Promise<IFullUser | undefined | void> {
  const userToken = localStorage.getItem(LocalStorageKeys.userToken);

  if (userToken)
    return await protectedApi.get<IFullUser>('/user')
      .then(result => {
        return result.data
      })
      .catch(() => {
        localStorage.removeItem(LocalStorageKeys.userToken)
      })

  return undefined;
}