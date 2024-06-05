import { makeAxiosHttpClient } from '@/domain/infra/factory/http-client';
import { UpdateTodoService } from '../service/update-todo-service';
import { UpdateTodoUseCase } from '../usecases/update-todo';

export function makeUpdateTodo(): UpdateTodoUseCase {
  const axiosHttpClient = makeAxiosHttpClient();
  return new UpdateTodoService(axiosHttpClient);
}
