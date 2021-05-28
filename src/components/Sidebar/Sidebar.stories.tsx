import React from "react";
import { Story, Meta } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";

const Template: Story<SidebarProps> = (args) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Sidebar className={args.className} onLogoClick={args.onLogoClick}>
      <Sidebar.NavButton icon="info" isActive={activeIndex === 0} onClick={() => setActiveIndex(0)}>
        Example 1
      </Sidebar.NavButton>
      <Sidebar.NavButton icon="info" isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}>
        Example 2
      </Sidebar.NavButton>
      <Sidebar.NavButton icon="info" isActive={activeIndex === 2} onClick={() => setActiveIndex(2)}>
        Example 3
      </Sidebar.NavButton>
    </Sidebar>
  );
};

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
