import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { TodoDto } from '@/domain/dto/todo-dto';
import { makeSaveTodo } from '@/domain/factory/save-todo';
import { useStorage } from '@/hooks/storage';
import { queryClient } from '@/main';
import { TodoField } from '@/components/form/todo-field';

export function Hero() {
  const storage = useStorage();
  const formMethods = useForm<TodoDto>();
  const mutation = useMutation({
    mutationFn: function (todo: TodoDto) {
      const handler = makeSaveTodo();
      return handler.perform(todo);
    },

    async onSuccess() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      queryClient.invalidateQueries({ queryKey: ['get-todos'] });
    },
  });

  function changeTheme() {
    window.document.documentElement.classList.toggle('dark');
    storage.set(
      'theme',
      window.document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light',
    );
  }

  function createTodo(todo: TodoDto) {
    mutation.mutate(todo);
  }

  return (
    <header className="h-[300px] w-full bg-hero-light dark:bg-hero-dark bg-cover bg-no-repeat">
      <div className="container px-[10px] py-[70px] flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase bold text-[40px] text-white">Todo</h1>
          <button
            className="w-[25px] h-[25px] bg-toggle-btn-light dark:bg-toggle-btn-dark bg-cover"
            onClick={changeTheme}
          />
        </div>
        <FormProvider {...formMethods}>
          <TodoField className="mt-[40px]" onSubmitTodo={createTodo} />
        </FormProvider>
      </div>
    </header>
  );
}
