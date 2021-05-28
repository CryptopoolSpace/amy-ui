import React from "react";
import clsx from "clsx";
import css from "./Text.module.scss";

const TextTypeEnum = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  large: "p",
  medium: "p",
  small: "p",
  span: "span"
};

export type TextProps = {
  children: React.ReactNode;
  font?: "sans" | "serif";
  align?: "left" | "center" | "right";
  color?: "primary" | "red" | "green" | "textPrimary" | "textSecondary" | "textTertiary";
  variant?: "h1" | "h2" | "h3" | "h4" | "large" | "medium" | "small" | "span";
  className?: string;
};

const Text = ({ font, align, color, variant, className, children }: TextProps): JSX.Element => {
  return React.createElement(
    TextTypeEnum[variant],
    {
      className: clsx(
        font && css[font],
        align && css[align],
        color && css[color],
        variant && css[variant],
        className
      )
    },
    children
  );
};

Text.defaultProps = {
  font: "sans",
  variant: "medium"
};

export default Text;
