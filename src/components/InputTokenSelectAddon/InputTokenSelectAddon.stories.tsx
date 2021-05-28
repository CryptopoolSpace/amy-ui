import { Story, Meta } from "@storybook/react";
import InputTokenSelectAddon, { InputTokenSelectAddonProps } from "./InputTokenSelectAddon";

const Template: Story<InputTokenSelectAddonProps> = (args) => <InputTokenSelectAddon {...args} />;

export default {
  title: "Components/InputTokenSelectAddon",
  component: InputTokenSelectAddon,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  label: "You pay",
  defaultValue: "ETH",
  tokenList: ["ETH", "USDT", "WBTC"],
  onChange: (token) => console.log(token)
};
