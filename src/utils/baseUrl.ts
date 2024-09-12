import axios, {AxiosInstance} from 'axios';

const baseUrlConfig: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const baseAPI = baseUrlConfig;
