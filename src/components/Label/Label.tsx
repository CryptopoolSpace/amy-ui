import React from "react";
import clsx from "clsx";
import Icon from "../Icon";
import css from "./Label.module.scss";

export type LabelProps = {
  children: string;
  icon?: string;
  color?: "green" | "red";
  className?: string;
};

const Label = ({ icon, color, className, children }: LabelProps): JSX.Element => {
  return (
    <span className={clsx(css.Label, css[color], className)}>
      {icon && <Icon className={css.Label__icon} name={icon} />}
      {children}
    </span>
  );
};

Label.defaultProps = {
  color: "green"
};

export default Label;
