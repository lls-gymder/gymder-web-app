import axios from 'axios';
import { LocalStorageKeys } from 'Common/models';

const accessToken =
  (typeof window !== 'undefined' &&
    localStorage.getItem(LocalStorageKeys.userToken
    )) ||
  null;

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  }
});

const protectedApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  }
})


export { api, protectedApi };