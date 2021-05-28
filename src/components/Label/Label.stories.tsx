import { Story, Meta } from "@storybook/react";
import Label, { LabelProps } from "./Label";

const Template: Story<LabelProps> = (args) => <Label {...args}>Label</Label>;

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
