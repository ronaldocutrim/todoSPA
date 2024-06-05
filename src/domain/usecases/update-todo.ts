import { TodoDto } from '../dto/todo-dto';

export interface UpdateTodoUseCase {
  perform(todoId: string, saveDto: Partial<TodoDto>): Promise<void>;
}
