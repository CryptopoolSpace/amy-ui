import React from "react";
import clsx from "clsx";
import css from "./Panel.module.scss";

export type PanelProps = {
  children: React.ReactNode;
  compact?: boolean;
  className?: string;
};

const Panel = ({ compact, className, children }: PanelProps): JSX.Element => {
  return <div className={clsx(css.Panel, compact && css.compact, className)}>{children}</div>;
};

export default Panel;
