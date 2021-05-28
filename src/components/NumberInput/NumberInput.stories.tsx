import { Story, Meta } from "@storybook/react";
import NumberInput, { NumberInputProps } from "./NumberInput";

const Template: Story<NumberInputProps> = (args) => <NumberInput {...args}></NumberInput>;

export default {
  title: "Components/NumberInput",
  component: NumberInput,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
