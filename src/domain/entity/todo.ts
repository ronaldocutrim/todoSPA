export class TodoEntity {
  todoId: string;
  descriptionContent: string;
  isCompleted: boolean;

  constructor(
    todoId: string,
    descriptionContent: string,
    isCompleted: boolean,
  ) {
    this.todoId = todoId;
    this.descriptionContent = descriptionContent;
    this.isCompleted = isCompleted;
  }
}
