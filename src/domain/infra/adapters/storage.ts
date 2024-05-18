export interface Storage {
  set(key: string, value: string): void;
  get(key: string): string | null;
  remove(key: string): void;
}
