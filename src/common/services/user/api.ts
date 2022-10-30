import axios from 'axios';
import { LocalStorageKeys } from 'Common/models';

const accessToken =
  (typeof window !== 'undefined' &&
    localStorage.getItem(LocalStorageKeys.userToken
    )) ||
  null;

const usersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
  headers: {
    'Content-Type': 'application/json',
  }
});

const protectedUsersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }
})

export { usersApi, protectedUsersApi };