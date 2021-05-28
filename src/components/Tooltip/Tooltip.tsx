import React from "react";
import clsx from "clsx";
import Icon from "../Icon";
import Text from "../Text";
import css from "./Tooltip.module.scss";

export type TooltipProps = {
  content: string | React.ReactNode;
  icon?: string;
  className?: string;
};

const Tooltip = ({ icon, content, className }: TooltipProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={clsx(css.Tooltip, isOpen && css.isOpen, className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Icon name={icon} className={css.Tooltip__icon} />
      <div className={css.Tooltip__tip}>
        {typeof content === "string" ? <Text>{content}</Text> : content}
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  icon: "info"
};

export default Tooltip;
