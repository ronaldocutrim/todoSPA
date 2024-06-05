import { useDebounceCallback } from 'usehooks-ts';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TextField } from '@/components/text-field.tsx';
import { Checkbox } from '@/components/checkbox.tsx';
import { TodoDto } from '@/domain/dto/todo-dto';

type TodoFieldProps = {
  className?: string;
  onSubmitTodo: SubmitHandler<TodoDto>;
  onChangeDescriptionDebounce?: (value: string) => void;
  onChangeCompletedDebounce?: (value: boolean) => void;
};

export function TodoField(props: TodoFieldProps) {
  const formMethods = useFormContext<TodoDto>();
  const descriptionDebounce = useDebounceCallback(
    (inputValue) => props.onChangeDescriptionDebounce?.(inputValue),
    2500,
  );
  const completedDebounce = useDebounceCallback(
    (inputValue) => props.onChangeCompletedDebounce?.(inputValue),
    2500,
  );
  return (
    <form
      className={`relative flex items-center ${props.className}`}
      onSubmit={formMethods.handleSubmit(props.onSubmitTodo)}
    >
      <Checkbox
        className="top-[50%] -translate-y-1/2 left-[24px] absolute border"
        {...formMethods.register('isCompletedDto', {
          onChange(event) {
            completedDebounce(event.target.checked);
          },
        })}
      />

      <TextField
        className="pl-[58px]"
        placeholder="Create a new todo…"
        {...formMethods.register('descriptionDto', {
          onChange(event) {
            descriptionDebounce(event.target.value);
          },
        })}
      />
    </form>
  );
}
