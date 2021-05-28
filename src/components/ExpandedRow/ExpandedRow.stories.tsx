import { Story, Meta } from "@storybook/react";
import ExpandedRow, { ExpandedRowProps } from "./ExpandedRow";

const Template: Story<ExpandedRowProps> = (args) => (
  <ExpandedRow {...args}>
    <ExpandedRow.DiagramPane>Diagram Pane</ExpandedRow.DiagramPane>
    <ExpandedRow.Pane>Pane</ExpandedRow.Pane>
    <ExpandedRow.TabsPane>
      <ExpandedRow.TabContent label="Stake">Stake Form</ExpandedRow.TabContent>
      <ExpandedRow.TabContent label="Unstake">Unstake Form</ExpandedRow.TabContent>
    </ExpandedRow.TabsPane>
  </ExpandedRow>
);

export default {
  title: "Components/ExpandedRow",
  component: ExpandedRow,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
