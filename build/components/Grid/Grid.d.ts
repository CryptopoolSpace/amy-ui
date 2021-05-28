import React from "react";
export declare type GridProps = {
  children: React.ReactNode;
  position?: "primary" | "secondary";
  className?: string;
};
declare const Grid: ({ position, className, children }: GridProps) => JSX.Element;
export default Grid;
