/// <reference types="react" />
export declare type AmountGroupButtonProps = {
  onClick: (rate: number) => void;
  customRate: number | undefined;
  className?: string;
};
declare const AmountGroupButton: ({
  customRate,
  onClick,
  className
}: AmountGroupButtonProps) => JSX.Element;
export default AmountGroupButton;
