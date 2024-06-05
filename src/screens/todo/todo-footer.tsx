import { TodoFilter } from './todo-list';

export type TodoFooterProps = {
  itemsLeft: number;
  activeFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  clearCompleted: () => void;
};

export function TodoFooter(props: TodoFooterProps) {
  return (
    <div className="flex justify-between py-4 px-6 rounded-b-[5px] rounded-bl-[5px] bg-white dark:bg-[#25273D] text-[#9495A5] dark:text-[#5B5E7E]">
      <span>{props.itemsLeft} items left</span>
      <div className="flex gap-[18px] font-bold">
        <button
          className={
            props.activeFilter === 'all' ? 'text-[#3A7CFD]' : undefined
          }
          onClick={() => props.onFilterChange('all')}
        >
          All
        </button>
        <button
          className={
            props.activeFilter === 'active' ? 'text-[#3A7CFD]' : undefined
          }
          onClick={() => props.onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={
            props.activeFilter === 'completed' ? 'text-[#3A7CFD]' : undefined
          }
          onClick={() => props.onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
}
