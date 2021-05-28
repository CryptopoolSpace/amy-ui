import { Story, Meta } from "@storybook/react";
import Button from "../Button";
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button A</Button>
    <Button>Button B</Button>
    <Button>Button C</Button>
  </ButtonGroup>
);

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
