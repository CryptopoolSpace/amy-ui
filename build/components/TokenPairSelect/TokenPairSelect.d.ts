/// <reference types="react" />
export declare type TokenPairSelectProps = {
  defaultTokenA: string;
  defaultTokenB: string;
  tokenList: string[];
  onChange: (pair: [string, string]) => void;
  className?: string;
};
declare const TokenPairSelect: ({
  defaultTokenA,
  defaultTokenB,
  tokenList,
  onChange,
  className
}: TokenPairSelectProps) => JSX.Element;
export default TokenPairSelect;
