import { Story, Meta } from "@storybook/react";
import Text, { TextProps } from "./Text";

const Template: Story<TextProps> = (args) => <Text {...args}>Text</Text>;

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "red", "green", "textPrimary", "textSecondary", "textTertiary"]
      }
    }
  }
} as Meta;

export const Default = Template.bind({});
Default.args = {};
