import React from "react";
import clsx from "clsx";
import css from "./AmountGroupButton.module.scss";

export type AmountGroupButtonProps = {
  onClick: (rate: number) => void;
  customRate: number | undefined;
  className?: string;
};

const AmountGroupButton = ({
  customRate,
  onClick,
  className
}: AmountGroupButtonProps): JSX.Element => {
  const [activeRate, setActiveRate] = React.useState(null);
  const amountList = React.useMemo(
    () => [
      { title: "25%", rate: 0.25 },
      { title: "50%", rate: 0.5 },
      { title: "75%", rate: 0.75 },
      { title: "100%", rate: 1 }
    ],
    []
  );

  const handleClick = (rate: number) => {
    onClick(rate);
    setActiveRate(rate);
  };

  React.useEffect(() => {
    setActiveRate(customRate);
  }, [customRate]);

  return (
    <div className={clsx(css.AmountGroupButton, className)}>
      {amountList.map((i) => (
        <button
          key={`id-${i.title}`}
          className={clsx(css.AmountGroupButton__button, i.rate === activeRate && css.active)}
          onClick={() => handleClick(i.rate)}
        >
          {i.title}
        </button>
      ))}
    </div>
  );
};

export default AmountGroupButton;
