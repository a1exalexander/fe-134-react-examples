import { ButtonStyled } from "./Button.styled";

export interface ButtonProps {
  children: string | number;
  variant: "filled" | "outlined";
}

export const Button = ({ children, variant }: ButtonProps) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};
