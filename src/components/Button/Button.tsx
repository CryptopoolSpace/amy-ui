import React from "react";
import clsx from "clsx";
import css from "./Button.module.scss";

export type ButtonProps = {
  children: React.ReactNode;
  color?: "primary" | "red" | "green";
  size?: "medium" | "large";
  variant?: "ghost";
  fluid?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  color,
  size,
  variant,
  fluid,
  disabled,
  className,
  onClick,
  children
}: ButtonProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => !disabled && onClick(e);

  return (
    <button
      className={clsx(
        css.Button,
        color && css[color],
        size && css[size],
        variant && css[variant],
        fluid && css.fluid,
        className
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
  size: "medium"
};

export default Button;
