export interface HttpClient {
  post<T>(url: string, body: unknown): Promise<T>;
  get<T>(url: string): Promise<T>;
  patch<T>(url: string, body: unknown): Promise<T>;
}
