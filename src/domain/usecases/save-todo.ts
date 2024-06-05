import { TodoDto } from '../dto/todo-dto';

export interface SaveTodoUseCase {
  perform(saveDto: TodoDto): Promise<void>;
}
