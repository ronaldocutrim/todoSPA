import { TodoEntity } from '@/domain/entity/todo';
import { TodoItem } from './todo-item';
import { TodoFooter, TodoFooterProps } from './todo-footer';

export type TodoFilter = 'all' | 'active' | 'completed';

type TodoListProps = {
  isEmpty: boolean;
  isLoading: boolean;
  data?: TodoEntity[];
} & TodoFooterProps;

export function TodoList(props: TodoListProps) {
  if (props.isLoading) {
    return (
      <p className="container px-[10px] mt-4 dark:text-white text-gray-900">
        Carregando...
      </p>
    );
  }
  if (!props.isEmpty)
    return (
      <p className="container px-[10px] mt-4 dark:text-white text-gray-900">
        Nenhuma tarefa criada!
      </p>
    );

  return (
    <div className="container px-[10px]  mt-[-48px]">
      <div className="shadow-todo-list-container">
        {props.data?.map((todo) => <TodoItem key={todo.todoId} todo={todo} />)}
        <TodoFooter
          activeFilter={props.activeFilter}
          itemsLeft={props.itemsLeft}
          onFilterChange={props.onFilterChange}
          clearCompleted={props.clearCompleted}
        />
      </div>
    </div>
  );
}
