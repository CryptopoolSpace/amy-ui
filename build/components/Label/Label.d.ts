/// <reference types="react" />
export declare type LabelProps = {
  children: string;
  icon?: string;
  color?: "green" | "red";
  className?: string;
};
declare const Label: {
  ({ icon, color, className, children }: LabelProps): JSX.Element;
  defaultProps: {
    color: string;
  };
};
export default Label;
