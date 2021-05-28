import React from "react";
import clsx from "clsx";
import useOutsideClickDetector from "@hooks/useOutsideClickDetector";
import Icon from "../Icon";
import css from "./TokenPairSelect.module.scss";

export type TokenPairSelectProps = {
  defaultTokenA: string;
  defaultTokenB: string;
  tokenList: string[];
  onChange: (pair: [string, string]) => void;
  className?: string;
};

const TokenPairSelect = ({
  defaultTokenA,
  defaultTokenB,
  tokenList,
  onChange,
  className
}: TokenPairSelectProps): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [tokenA, setTokenA] = React.useState(defaultTokenA);
  const [tokenB, setTokenB] = React.useState(defaultTokenB);

  const handleTokenASelect = (value) => {
    if (value === tokenB) return;
    setTokenA(value);
    onChange([tokenA, tokenB]);
  };

  const handleTokenBSelect = (value) => {
    if (value === tokenA) return;
    setTokenB(value);
    onChange([tokenA, tokenB]);
  };

  useOutsideClickDetector(ref.current, isOpen, () => setIsOpen(false));

  return (
    <div className={clsx(css.TokenPairSelect, isOpen && css.isOpen, className)} ref={ref}>
      <div className={css.TokenPairSelect__trigger} onClick={() => setIsOpen(!isOpen)}>
        {tokenA} / {tokenB}{" "}
        <Icon name="chevron-down" className={css.TokenPairSelect__triggerArrow} />
      </div>
      <div className={css.TokenPairSelect__menu}>
        <div className={css.TokenPairSelect__column}>
          <ul>
            {tokenList.map((i) => (
              <li
                key={`id-a-${i}`}
                onClick={() => handleTokenASelect(i)}
                className={clsx(
                  css.TokenPairSelect__menuItem,
                  i === tokenA && css.active,
                  i === tokenB && css.disabled
                )}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.TokenPairSelect__column}>
          <ul>
            {tokenList.map((i) => (
              <li
                key={`id-b-${i}`}
                onClick={() => handleTokenBSelect(i)}
                className={clsx(
                  css.TokenPairSelect__menuItem,
                  i === tokenB && css.active,
                  i === tokenA && css.disabled
                )}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokenPairSelect;
