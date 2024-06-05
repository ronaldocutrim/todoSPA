import { cva } from 'class-variance-authority';

export const checkbox = cva(`
  w-[24px] h-[24px] 
  rounded-full 
  appearance-none 
  border border-[#E3E4F1] dark:border-[#393A4B] 
  checked:checkbox_checked`);
