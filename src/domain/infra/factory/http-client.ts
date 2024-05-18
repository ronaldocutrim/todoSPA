import { HttpClient } from '../adapters/http-client';
import { AxiosHttpClientAdapter } from '../axios-http-client-adapter';
import { LocalStorageAdapter } from '../local-storage-adapter';

export function makeAxiosHttpClient(): HttpClient {
  const storage = new LocalStorageAdapter();
  return new AxiosHttpClientAdapter(storage);
}
