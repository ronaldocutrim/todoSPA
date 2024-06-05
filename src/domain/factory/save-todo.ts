import { makeAxiosHttpClient } from '@/domain/infra/factory/http-client';
import { SaveTodoUseCase } from '../usecases/save-todo';
import { SaveTodoService } from '../service/save-todo-service';

export function makeSaveTodo(): SaveTodoUseCase {
  const axiosHttpClient = makeAxiosHttpClient();
  return new SaveTodoService(axiosHttpClient);
}
