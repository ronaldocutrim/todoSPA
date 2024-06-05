import { FormProvider, useForm } from 'react-hook-form';
import { TodoDto } from '@/domain/dto/todo-dto';
import { TodoField } from '@/components/form/todo-field';
import { TodoEntity } from '@/domain/entity/todo';
import { TodoMapper } from '@/domain/mapper/todo-mapper';
import { useMutation } from '@tanstack/react-query';
import { makeUpdateTodo } from '@/domain/factory/update-todo';

type TodoItemProps = {
  todo: TodoEntity;
};

export function TodoItem(props: TodoItemProps) {
  const todoDto = TodoMapper.toDto(props.todo);
  const formMethods = useForm<TodoDto>({
    defaultValues: todoDto,
  });
  const mutation = useMutation({
    mutationFn: function (todo: Partial<TodoDto>) {
      const handler = makeUpdateTodo();
      return handler.perform(props.todo.todoId, todo);
    },
  });

  function updateTodo(data: TodoDto) {
    console.log(data);
    mutation.mutate(data);
  }

  function updateCompleted(completed: boolean) {
    console.log(completed);
    mutation.mutate({ isCompletedDto: completed });
  }

  function updateDescription(description: string) {
    mutation.mutate({ descriptionDto: description });
  }

  return (
    <FormProvider {...formMethods}>
      <TodoField
        className="even:border-b even:border-t border-[#E3E4F1] dark:border-[#393A4B]"
        onSubmitTodo={updateTodo}
        onChangeCompletedDebounce={updateCompleted}
        onChangeDescriptionDebounce={updateDescription}
      />
    </FormProvider>
  );
}
