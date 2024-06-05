import { TodoDto } from '../dto/todo-dto';
import { TodoEntity } from '../entity/todo';
import { TodoModel } from '../model/todo-mode';

export class TodoMapper {
  static toEntity(model: TodoModel): TodoEntity {
    if (!model.id || !model.description || model.completed === undefined) {
      throw new Error('Invalid Todo');
    }
    return new TodoEntity(model.id, model.description, model.completed);
  }

  static toDto(entity: TodoEntity): TodoDto {
    return new TodoDto(entity.descriptionContent, entity.isCompleted);
  }

  static toModel(entity: Partial<TodoDto>): TodoModel {
    return new TodoModel(entity.descriptionDto, entity.isCompletedDto);
  }
}
