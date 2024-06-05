import { SaveTodoUseCase } from '../usecases/save-todo';
import { HttpClient } from '../infra/adapters/http-client';
import { TodoDto } from '../dto/todo-dto';
import { TodoMapper } from '../mapper/todo-mapper';

export class SaveTodoService implements SaveTodoUseCase {
  constructor(private readonly httpClient: HttpClient) {}

  async perform(saveDto: TodoDto): Promise<void> {
    const entity = TodoMapper.toModel(saveDto);

    this.httpClient.post<void>('/todo', entity);
  }
}
