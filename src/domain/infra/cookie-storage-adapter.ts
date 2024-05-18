import { Storage } from './adapters/storage';

export class CookieStorageAdapter implements Storage {
  set(key: string, value: string): void {
    // Defina o cookie com o nome da chave e valor
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/;`;
  }

  get(key: string): string | null {
    // Obtenha todos os cookies
    const cookies = document.cookie.split('; ');

    // Encontre o cookie específico pelo nome da chave
    for (const cookie of cookies) {
      const [cookieKey, cookieValue] = cookie.split('=');
      if (decodeURIComponent(cookieKey) === key) {
        return decodeURIComponent(cookieValue);
      }
    }

    return null;
  }

  remove(key: string): void {
    // Defina o cookie com data de expiração passada para removê-lo
    document.cookie = `${encodeURIComponent(key)}=; Max-Age=-99999999; path=/;`;
  }
}
