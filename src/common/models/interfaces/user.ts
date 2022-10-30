export interface IBaseUser {
  name: string;
  email: string;
}

export interface IFullUser extends IBaseUser {
  test: string;
}