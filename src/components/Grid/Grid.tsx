import React from "react";
import clsx from "clsx";
import css from "./Grid.module.scss";

export type GridProps = {
  children: React.ReactNode;
  position?: "primary" | "secondary";
  className?: string;
};

const Grid = ({ position, className, children }: GridProps): JSX.Element => {
  return <div className={clsx(css.Grid, css[position], className)}>{children}</div>;
};

export default Grid;
