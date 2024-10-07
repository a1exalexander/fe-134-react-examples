import clsx from "clsx";
import { MouseEvent } from "react";

export interface ButtonProps {
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  children: string | number;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};
