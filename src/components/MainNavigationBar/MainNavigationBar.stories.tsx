import { Story, Meta } from "@storybook/react";
import MainNavigationBar, { MainNavigationBarProps } from "./MainNavigationBar";

const Template: Story<MainNavigationBarProps> = (args) => (
  <MainNavigationBar {...args}>Example</MainNavigationBar>
);

export default {
  title: "Components/MainNavigationBar",
  component: MainNavigationBar,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
