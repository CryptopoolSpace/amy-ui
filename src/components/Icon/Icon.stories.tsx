import { Story, Meta } from "@storybook/react";
import { iconControl } from "@controlConfigs";
import Icon, { IconProps } from "./Icon";

const Template: Story<IconProps> = (args) => <Icon {...args}></Icon>;

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: iconControl
  }
} as Meta;

export const Default = Template.bind({});
Default.args = {
  name: "info"
};
