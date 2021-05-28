import React from "react";
export declare type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export declare type ContainerRowProps = {
  children: React.ReactNode;
  className?: string;
};
declare const Container: {
  ({ className, children }: ContainerProps): JSX.Element;
  Row: ({ className, children }: ContainerRowProps) => JSX.Element;
};
export default Container;
