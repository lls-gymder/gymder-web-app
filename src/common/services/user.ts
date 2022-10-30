import axios from 'axios';

const usersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
  headers: {
    "Content-Type": "application/json",
  }
});

const protectedUsersApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${'testing'}`,
    "Content-Type": "application/json",
  }
})

export { usersApi, protectedUsersApi };