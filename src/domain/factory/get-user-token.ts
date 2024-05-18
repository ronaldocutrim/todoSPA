import { makeAxiosHttpClient } from '@/domain/infra/factory/http-client';
import { GetUserTokenService } from '../service/get-user-token-service';
import { LocalStorageAdapter } from '@/domain/infra/local-storage-adapter';
// import { CookieStorageAdapter } from '../infra/cookie-storage-adapter';

export function makeGetUserToken(): GetUserTokenService {
  const axiosHttpClient = makeAxiosHttpClient();
  const localStorageAdapter = new LocalStorageAdapter();
  // const cookieStorageAdapter = new CookieStorageAdapter();
  return new GetUserTokenService(axiosHttpClient, localStorageAdapter);
}
