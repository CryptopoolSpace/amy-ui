import React from "react";
export declare type TextProps = {
  children: React.ReactNode;
  font?: "sans" | "serif";
  align?: "left" | "center" | "right";
  color?: "primary" | "red" | "green" | "textPrimary" | "textSecondary" | "textTertiary";
  variant?: "h1" | "h2" | "h3" | "h4" | "large" | "medium" | "small" | "span";
  className?: string;
};
declare const Text: {
  ({ font, align, color, variant, className, children }: TextProps): JSX.Element;
  defaultProps: {
    font: string;
    variant: string;
  };
};
export default Text;
