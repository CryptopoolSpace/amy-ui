/// <reference types="react" />
export declare type NumberInputProps = {
  defaultValue: number;
  minValue: number;
  maxValue: number;
  step: number;
  onChange: (value: number) => void;
  unit?: string;
  outOfScopeMessage?: string;
  className?: string;
};
declare const NumberInput: ({
  defaultValue,
  minValue,
  maxValue,
  step,
  onChange,
  unit,
  className
}: NumberInputProps) => JSX.Element;
export default NumberInput;
