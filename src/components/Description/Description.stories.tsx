import { Story, Meta } from "@storybook/react";
import Text from "../Text";
import Description, { DescriptionProps } from "./Description";

const Template: Story<DescriptionProps> = (args) => (
  <div style={{ padding: "100px 24px 24px", background: "yellow", width: 320, margin: "auto" }}>
    <Description {...args} />
  </div>
);

export default {
  title: "Components/Description",
  component: Description,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {
  name: "name",
  detail: "detail"
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  name: "name",
  tooltip: {
    content: "Tooltip content."
  },
  detail: "detail"
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  name: "name",
  DetailComponent: <Text color="red">13.4%</Text>
};
