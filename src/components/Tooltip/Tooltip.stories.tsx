import { Story, Meta } from "@storybook/react";
import Tooltip, { TooltipProps } from "./Tooltip";

const Template: Story<TooltipProps> = (args) => (
  <div style={{ padding: 200, background: "yellow", cssFloat: "left" }}>
    <Tooltip {...args} />
  </div>
);

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  content: "String tooltip content."
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  content: (
    <div>
      Custom HTML tooltip content. <a href="">link</a>
    </div>
  )
};
