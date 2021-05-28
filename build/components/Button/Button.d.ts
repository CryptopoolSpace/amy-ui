import React from "react";
export declare type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "red" | "green";
  size?: "medium" | "large";
  variant?: "ghost";
  fluid?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: {
  ({
    color,
    size,
    variant,
    fluid,
    disabled,
    className,
    onClick,
    children
  }: ButtonProps): JSX.Element;
  defaultProps: {
    color: string;
    size: string;
  };
};
export default Button;
