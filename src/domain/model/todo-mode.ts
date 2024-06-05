export class TodoModel {
  id?: string;
  description?: string;
  completed?: boolean;

  constructor(description?: string, completed?: boolean, id?: string) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}
