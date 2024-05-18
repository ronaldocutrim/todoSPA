import axios from 'axios';
import { HttpClient } from './adapters/http-client';
import { Storage } from './adapters/storage';

const api = axios.create({
  baseURL: 'http://todoapi.ronaldocutrim.com.br/api',
});

export class AxiosHttpClientAdapter implements HttpClient {
  constructor(private readonly storage: Storage) {
    api.interceptors.request.use((config) => {
      const token = this.storage.get('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async get<T>(url: string): Promise<T> {
    return (await api.get(url)).data;
  }

  async post<T, K>(url: string, body: K): Promise<T> {
    return (await api.post(url, body)).data;
  }
}
