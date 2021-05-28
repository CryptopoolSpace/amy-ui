import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: ["primary", "red", "green"]
      }
    },
    variant: {
      control: {
        type: "radio",
        options: ["undefined", "ghost"]
      }
    }
  }
} as Meta;

export const Default = Template.bind({});
Default.args = {};
