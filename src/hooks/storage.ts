import { LocalStorageAdapter } from '@/domain/infra/local-storage-adapter';

export function useStorage() {
  const storage = new LocalStorageAdapter();
  return storage;
}
