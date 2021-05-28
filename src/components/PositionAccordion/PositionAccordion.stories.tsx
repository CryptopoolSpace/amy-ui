import { Story, Meta } from "@storybook/react";
import PositionAccordion, { PositionAccordionProps } from "./PositionAccordion";

const Template: Story<PositionAccordionProps> = (args) => <PositionAccordion {...args} />;

export default {
  title: "Components/PositionAccordion",
  component: PositionAccordion,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  positionsList: [
    {
      tokenPair: "USDT / ETH",
      position: "152.01 ETH",
      leverage: 3,
      riskLevel: {
        value: "150%",
        color: "red"
      },
      liquidityPrice: "1 ETH = 1,789 USDT"
    },
    {
      tokenPair: "USDT / WBTC",
      position: "152.01 ETH",
      leverage: 3,
      riskLevel: {
        value: "150%",
        color: "green"
      },
      liquidityPrice: "1 ETH = 1,789 WBTC"
    }
  ],
  onAddPositionButtonClick: (i) => console.log(i.tokenPair),
  onClosePositionButtonClick: (i) => console.log(i.tokenPair)
};
