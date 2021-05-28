import React from "react";
import clsx from "clsx";
import css from "./ButtonGroup.module.scss";

export type ButtonGroupProps = {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
};

const ButtonGroup = ({ fluid, className, children }: ButtonGroupProps): JSX.Element => {
  return (
    <div className={clsx(css.ButtonGroup, fluid && css.fluid, className)}>
      {React.Children.map(children, (i: JSX.Element) => {
        return React.cloneElement(i, { className: css.ButtonGroup__button });
      })}
    </div>
  );
};

export default ButtonGroup;
