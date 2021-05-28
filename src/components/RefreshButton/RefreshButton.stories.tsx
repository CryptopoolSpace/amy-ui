import { Story, Meta } from "@storybook/react";
import RefreshButton, { RefreshButtonProps } from "./RefreshButton";

const Template: Story<RefreshButtonProps> = (args) => <RefreshButton {...args}></RefreshButton>;

export default {
  title: "Components/RefreshButton",
  component: RefreshButton,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
