import { Story, Meta } from "@storybook/react";
import AmountGroupButton, { AmountGroupButtonProps } from "./AmountGroupButton";

const Template: Story<AmountGroupButtonProps> = (args) => (
  <AmountGroupButton {...args}></AmountGroupButton>
);

export default {
  title: "Components/AmountGroupButton",
  component: AmountGroupButton,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
