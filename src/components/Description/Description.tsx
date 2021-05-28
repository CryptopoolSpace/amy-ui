import React from "react";
import clsx from "clsx";
import Text from "../Text";
import Tooltip from "../Tooltip";
import css from "./Description.module.scss";

export type DescriptionProps = {
  name: string;
  tooltip?: {
    icon: string;
    content: string | React.ReactNode;
  };
  detail?: string;
  DetailComponent?: JSX.Element;
  className?: string;
};

const Description = ({
  name,
  tooltip,
  detail,
  DetailComponent,
  className
}: DescriptionProps): JSX.Element => {
  return (
    <div className={clsx(css.Description, className)}>
      <div className={css.Description__name}>
        {name}:
        {tooltip && (
          <Tooltip
            className={css.Description__icon}
            icon={tooltip.icon}
            content={tooltip.content}
          />
        )}
      </div>
      {DetailComponent ? (
        <div className={css.Description__detail}>{DetailComponent}</div>
      ) : (
        <div className={css.Description__detail}>
          <Text variant="large" color="textSecondary">
            {detail}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Description;
