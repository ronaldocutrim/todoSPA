import { input } from '@/ui/input';
import { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;
type Ref = HTMLInputElement;

export const TextField = forwardRef<Ref, Props>(
  ({ className, ...rest }, ref) => {
    return <input ref={ref} className={input({ className })} {...rest} />;
  },
);
