import { Story, Meta } from "@storybook/react";
import InputMaxAddon, { InputMaxAddonProps } from "./InputMaxAddon";

const Template: Story<InputMaxAddonProps> = (args) => <InputMaxAddon {...args}></InputMaxAddon>;

export default {
  title: "Components/InputMaxAddon",
  component: InputMaxAddon,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
