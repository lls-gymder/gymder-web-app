export interface IBaseUser {
  name: string;
  email: string;
}

export interface IFullUser extends IBaseUser {
  avatar?: string;
}