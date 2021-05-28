import React from "react";
export declare type TooltipProps = {
  content: string | React.ReactNode;
  icon?: string;
  className?: string;
};
declare const Tooltip: {
  ({ icon, content, className }: TooltipProps): JSX.Element;
  defaultProps: {
    icon: string;
  };
};
export default Tooltip;
