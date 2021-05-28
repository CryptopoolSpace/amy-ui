import React from "react";
import clsx from "clsx";
import css from "./Container.module.scss";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export type ContainerRowProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ className, children }: ContainerProps): JSX.Element => {
  return <div className={clsx(css.Container, className)}>{children}</div>;
};

const ContainerRow = ({ className, children }: ContainerRowProps): JSX.Element => {
  return <div className={clsx(css.Container__row, className)}>{children}</div>;
};

Container.Row = ContainerRow;

export default Container;
