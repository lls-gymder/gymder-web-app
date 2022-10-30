import { usersApi } from 'Common/services';
import { ISignUp } from 'Generics/models';

interface ISignupResponse {
  message: string;
}

export const SignupService = async (data: ISignUp): Promise<any> => {
  return await usersApi.post<ISignupResponse>('/', data);
}