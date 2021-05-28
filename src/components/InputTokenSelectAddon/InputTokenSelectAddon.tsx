import React from "react";
import clsx from "clsx";
import useOutsideClickDetector from "@hooks/useOutsideClickDetector";
import Icon from "../Icon";
import css from "./InputTokenSelectAddon.module.scss";

export type InputTokenSelectAddonProps = {
  label: string;
  defaultValue: string;
  tokenList: string[];
  onChange: (value: string) => void;
  className?: string;
};

const InputTokenSelectAddon = ({
  label,
  defaultValue,
  tokenList,
  onChange,
  className
}: InputTokenSelectAddonProps): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeToken, setActiveToken] = React.useState(defaultValue || tokenList[0]);

  useOutsideClickDetector(ref.current, isOpen, () => setIsOpen(false));

  React.useEffect(() => {
    setActiveToken(defaultValue);
  }, [defaultValue]);

  const handleTokenSelect = (token) => {
    setActiveToken(token);
    setIsOpen(false);
    onChange(token);
  };

  return (
    <div className={clsx(css.InputTokenSelectAddon, isOpen && css.isOpen, className)} ref={ref}>
      <span className={css.InputTokenSelectAddon__label}>{label}</span>
      <div className={css.InputTokenSelectAddon__trigger} onClick={() => setIsOpen(!isOpen)}>
        {activeToken}
        <Icon className={css.InputTokenSelectAddon__triggerArrow} name="chevron-down" />
      </div>
      <div className={css.InputTokenSelectAddon__menu}>
        <ul>
          {tokenList.map((i) => (
            <li
              key={`id-${i}`}
              onClick={() => handleTokenSelect(i)}
              className={clsx(css.InputTokenSelectAddon__menuItem, i === activeToken && css.active)}
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputTokenSelectAddon;
