import React from "react";
import clsx from "clsx";
import css from "./MainNavigationBar.module.scss";

export type MainNavigationBarProps = {
  children: React.ReactNode;
  className?: string;
};

const MainNavigationBar = ({ className, children }: MainNavigationBarProps): JSX.Element => {
  return <div className={clsx(css.MainNavigationBar, className)}>{children}</div>;
};

export default MainNavigationBar;
