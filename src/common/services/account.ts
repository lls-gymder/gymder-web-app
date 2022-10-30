import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

const protectedApi = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${'testing'}`,
    "Content-Type": "application/json",
  }
})

export { api, protectedApi };