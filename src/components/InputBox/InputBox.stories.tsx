import { Story, Meta } from "@storybook/react";
import InputBox, { InputBoxProps } from "./InputBox";

const Template: Story<InputBoxProps> = (args) => <InputBox {...args} />;

export default {
  title: "Components/InputBox",
  component: InputBox,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
