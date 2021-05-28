import React from "react";
export declare type PanelProps = {
  children: React.ReactNode;
  compact?: boolean;
  className?: string;
};
declare const Panel: ({ compact, className, children }: PanelProps) => JSX.Element;
export default Panel;
