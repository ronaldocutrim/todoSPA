import { UpdateTodoUseCase } from '../usecases/update-todo';
import { HttpClient } from '../infra/adapters/http-client';
import { TodoDto } from '../dto/todo-dto';
import { TodoMapper } from '../mapper/todo-mapper';

export class UpdateTodoService implements UpdateTodoUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async perform(todoId: string, saveDto: Partial<TodoDto>): Promise<void> {
    const entity = TodoMapper.toModel(saveDto);
    this.httpClient.patch(`/todo/${todoId}`, entity);
  }
}
