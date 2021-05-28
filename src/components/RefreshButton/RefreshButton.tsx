import React from "react";
import clsx from "clsx";
import Icon from "../Icon";
import css from "./RefreshButton.module.scss";

export type RefreshButtonProps = {
  onClick: () => void;
  className?: string;
};

const RefreshButton = ({ onClick, className }: RefreshButtonProps): JSX.Element => {
  return (
    <button className={clsx(css.RefreshButton, className)} onClick={onClick}>
      <Icon name="info" className={css.RefreshButton__icon} />
      Refresh
    </button>
  );
};

export default RefreshButton;
