import { protectedApi } from 'Common/services';
import { ICreateProfile } from 'Profile/models';

export const CreateProfileService = async (data: ICreateProfile) => {
  await protectedApi.post('/profile', data);
}

export const ReadProfileService = async (): Promise<any> => {
  await protectedApi.get('/profile').then(result => result.data);
}