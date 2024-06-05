import { TodoEntity } from '../entity/todo';

export interface GetTodosUseCase {
  perform(): Promise<TodoEntity[]>;
}
