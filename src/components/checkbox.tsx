import { forwardRef, InputHTMLAttributes } from 'react';
import { checkbox } from '@/ui/checkbox.ts';

type Props = InputHTMLAttributes<HTMLInputElement>;
type Ref = HTMLInputElement;

export const Checkbox = forwardRef<Ref, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={checkbox({ className })}
        {...rest}
      />
    );
  },
);
