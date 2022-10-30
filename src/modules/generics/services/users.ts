import { LocalStorageKeys } from 'Common/models';
import { usersApi } from 'Common/services';
import { ISignUpRequest, ISignInRequest, ISignupResponse, ISigninResponse } from 'Generics/models';

export const SignupService = async (data: ISignUpRequest): Promise<ISignupResponse> => {
  return await usersApi.post<ISignupResponse>('/', data).then(result => result.data);
}

export const SigninService = async (data: ISignInRequest): Promise<ISigninResponse> => {
  return await usersApi.post<ISigninResponse>('/auth', data).then(result => {
    localStorage.setItem(LocalStorageKeys.userToken, result.data.token)

    return result.data;
  });
}
