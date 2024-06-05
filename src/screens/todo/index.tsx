import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useStorage } from '@/hooks/storage';
import { Hero } from '@/screens/todo/hero.tsx';
import { TodoList } from '@/screens/todo/todo-list.tsx';
import { makeGetTodos } from '@/domain/factory/get-todos';

export function TodoScreen() {
  const storage = useStorage();
  const query = useQuery({
    queryKey: ['get-todos'],
    queryFn: async () => {
      const handler = makeGetTodos();
      return handler.perform();
    },
  });

  useEffect(() => {
    if (storage.get('theme') === 'dark') {
      window.document.documentElement.classList.add('dark');
    }
  }, [storage]);

  return (
    <main className="h-full bg-white dark:bg-[#171823]">
      <Hero />
      <TodoList
        data={query.data}
        isEmpty={!!query.data?.length}
        isLoading={query.isLoading}
        activeFilter="active"
        itemsLeft={10}
        onFilterChange={() => {}}
        clearCompleted={() => {}}
      />
    </main>
  );
}
