import { Story, Meta } from "@storybook/react";
import Panel, { PanelProps } from "./Panel";

const Template: Story<PanelProps> = (args) => <Panel {...args} />;

export default {
  title: "Components/Panel",
  component: Panel,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  compact: false
};

export const Compact = Template.bind({});
Compact.args = {
  compact: true
};
