import { cva } from 'class-variance-authority';

export const input = cva(`
  w-full 
  focus:outline-none
  rounded-md 
  bg-white dark:bg-[#25273D] 
  px-6 py-5 
  text-[#494C6B] 
  dark:text-white 
  text-[18px]`);
