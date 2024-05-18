import { button } from '@/ui/button';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={button({ className })} {...rest}>
      {children}
    </button>
  );
}
