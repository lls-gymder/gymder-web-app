import { api } from 'Common/services';
import { ICreateUser } from 'Generics/models';


export const createUserService = async (data: ICreateUser): Promise<any> => {
  return await api.post('/users', data)
    .then(console.log)
    .then((result: any) => result.data.json)
    .catch(console.log);

}