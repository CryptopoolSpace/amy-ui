import React from "react";
import clsx from "clsx";
import css from "./InputMaxAddon.module.scss";

export type InputMaxAddonProps = {
  onClick: () => void;
  className?: string;
};

const InputMaxAddon = ({ onClick, className }: InputMaxAddonProps): JSX.Element => {
  return (
    <button className={clsx(css.InputMaxAddon, className)} onClick={onClick}>
      Max
    </button>
  );
};

export default InputMaxAddon;
