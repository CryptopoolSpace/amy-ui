import { Story, Meta } from "@storybook/react";
import TokenPairSelect, { TokenPairSelectProps } from "./TokenPairSelect";

const Template: Story<TokenPairSelectProps> = (args) => <TokenPairSelect {...args} />;

export default {
  title: "Components/TokenPairSelect",
  component: TokenPairSelect,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  defaultTokenA: "ETH",
  defaultTokenB: "USDT",
  tokenList: ["ETH", "USDT", "WBTC", "XXX1", "XXX2", "XXX3"],
  onChange: (value) => console.log(value)
};
