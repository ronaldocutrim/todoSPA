import { TodoEntity } from '../entity/todo';
import { HttpClient } from '../infra/adapters/http-client';
import { TodoMapper } from '../mapper/todo-mapper';
import { GetTodosUseCase } from '../usecases/get-todos';
import { TodoModel } from '../model/todo-mode';

export class GetTodosService implements GetTodosUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async perform(): Promise<TodoEntity[]> {
    const model = await this.httpClient.get<TodoModel[]>('/todo');
    return model.map(TodoMapper.toEntity);
  }
}
