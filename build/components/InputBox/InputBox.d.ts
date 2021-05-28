/// <reference types="react" />
export declare type InputBoxProps = {
  onChange: (value: string) => void;
  defaultValue?: number | string;
  label?: string;
  description?: string;
  unit?: string;
  compact?: boolean;
  AddonComponent?: JSX.Element;
  className?: string;
};
declare const InputBox: {
  ({
    defaultValue,
    onChange,
    label,
    description,
    unit,
    compact,
    AddonComponent,
    className
  }: InputBoxProps): JSX.Element;
  defaultProps: {
    defaultValue: number;
  };
};
export default InputBox;
