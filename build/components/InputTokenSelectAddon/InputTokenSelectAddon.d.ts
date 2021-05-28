/// <reference types="react" />
export declare type InputTokenSelectAddonProps = {
  label: string;
  defaultValue: string;
  tokenList: string[];
  onChange: (value: string) => void;
  className?: string;
};
declare const InputTokenSelectAddon: ({
  label,
  defaultValue,
  tokenList,
  onChange,
  className
}: InputTokenSelectAddonProps) => JSX.Element;
export default InputTokenSelectAddon;
