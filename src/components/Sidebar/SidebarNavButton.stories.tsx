import { Story, Meta } from "@storybook/react";
import { iconControl } from "@controlConfigs";
import Sidebar, { SidebarNavButtonProps } from "./Sidebar";

const Template: Story<SidebarNavButtonProps> = (args) => <Sidebar.NavButton {...args} />;

export default {
  title: "Components/Sidebar/NavButton",
  component: Sidebar.NavButton,
  argTypes: {
    icon: iconControl,
    onClick: { action: "clicked" }
  }
} as Meta;

export const Defalut = Template.bind({});
Defalut.args = {
  icon: "plus",
  isActive: false,
  children: "Dashboard"
};
