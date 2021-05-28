/// <reference types="react" />
declare type PositionAccordionItem = {
  id: number;
  tokenPair: string;
  position: string;
  leverage: number;
  riskLevel: {
    value: string;
    color: "green" | "red";
  };
  liquidityPrice: string;
};
export declare type PositionAccordionProps = {
  positionsList: PositionAccordionItem[];
  onAddPositionButtonClick: (i: PositionAccordionItem) => void;
  onClosePositionButtonClick: (i: PositionAccordionItem) => void;
  className?: string;
};
declare const PositionAccordion: ({
  positionsList,
  onAddPositionButtonClick,
  onClosePositionButtonClick,
  className
}: PositionAccordionProps) => JSX.Element;
export default PositionAccordion;
