import React from "react";
export declare type DescriptionProps = {
  name: string;
  tooltip?: {
    icon: string;
    content: string | React.ReactNode;
  };
  detail?: string;
  DetailComponent?: JSX.Element;
  className?: string;
};
declare const Description: ({
  name,
  tooltip,
  detail,
  DetailComponent,
  className
}: DescriptionProps) => JSX.Element;
export default Description;
