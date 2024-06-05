import { makeAxiosHttpClient } from '@/domain/infra/factory/http-client';
import { GetTodosUseCase } from '../usecases/get-todos';
import { GetTodosService } from '../service/get-todos';

export function makeGetTodos(): GetTodosUseCase {
  const axiosHttpClient = makeAxiosHttpClient();
  return new GetTodosService(axiosHttpClient);
}
