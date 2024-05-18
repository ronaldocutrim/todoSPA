import { input } from '@/ui/input';
import { InputHTMLAttributes, forwardRef } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;
type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, Props>(({ className, ...rest }, ref) => {
  return <input ref={ref} className={input({ className })} {...rest} />;
});
