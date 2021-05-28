import React from "react";
import clsx from "clsx";
import { UnmountClosed } from "react-collapse";
import Icon from "../Icon";
import Label from "../Label";
import Text from "../Text";
import Description from "../Description";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import css from "./PositionAccordion.module.scss";

type PositionAccordionItem = {
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

export type PositionAccordionProps = {
  positionsList: PositionAccordionItem[];
  onAddPositionButtonClick: (i: PositionAccordionItem) => void;
  onClosePositionButtonClick: (i: PositionAccordionItem) => void;
  className?: string;
};

const PositionAccordion = ({
  positionsList,
  onAddPositionButtonClick,
  onClosePositionButtonClick,
  className
}: PositionAccordionProps): JSX.Element => {
  const [activeTokenPair, setActiveTokenPair] = React.useState("");

  const handleTriggerClick = (tokenPair: string) => {
    if (tokenPair !== activeTokenPair) setActiveTokenPair(tokenPair);
    else setActiveTokenPair("");
  };

  return (
    <div className={clsx(css.PositionAccordion, className)}>
      {positionsList.map((i) => {
        const isOpen = i.tokenPair === activeTokenPair;

        return (
          <div key={i.id} className={css.PositionAccordionItem}>
            <div
              className={css.PositionAccordionTrigger}
              onClick={() => handleTriggerClick(i.tokenPair)}
            >
              <div className={css.PositionAccordionTrigger__row}>
                <Text variant="large" className={css.PositionAccordionTrigger__rowItem}>
                  {i.id}
                </Text>
                <Text variant="large" className={css.PositionAccordionTrigger__rowItem}>
                  {i.tokenPair}
                </Text>
                <Text
                  variant="large"
                  className={clsx(css.PositionAccordionTrigger__rowItem, isOpen && css.hidden)}
                >
                  {i.position}
                </Text>
                <Label
                  color={i.riskLevel.color}
                  className={clsx(css.PositionAccordionTrigger__rowItem, isOpen && css.hidden)}
                >
                  {i.riskLevel.value}
                </Label>
                <div className={clsx(css.PositionAccordionTrigger__arrow, isOpen && css.active)}>
                  <Icon name="chevron-down" />
                </div>
              </div>
            </div>
            <UnmountClosed isOpened={isOpen}>
              <div className={css.PositionAccordionBody}>
                <Description name="Leverage" detail={`x${i.leverage}`} />
                <Description name="Your Position" detail={i.position} />
                <Description
                  name="Risk Level"
                  DetailComponent={
                    <Text variant="large" color={i.riskLevel.color}>
                      {i.riskLevel.value}
                    </Text>
                  }
                />
                <Description name="Liquidity Price" detail={i.liquidityPrice} />
                <ButtonGroup fluid className={css.PositionAccordionBody__buttonGroup}>
                  <Button color="red" onClick={() => onClosePositionButtonClick(i)}>
                    Close Position
                  </Button>
                  <Button color="green" onClick={() => onAddPositionButtonClick(i)}>
                    Add Position
                  </Button>
                </ButtonGroup>
              </div>
            </UnmountClosed>
          </div>
        );
      })}
    </div>
  );
};

export default PositionAccordion;
