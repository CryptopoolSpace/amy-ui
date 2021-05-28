import { Story, Meta } from "@storybook/react";
import Layout, { LayoutProps } from "./Layout";

const Template: Story<LayoutProps> = (args) => (
  <Layout {...args}>
    <Layout.Sidebar>
      <div style={{ minWidth: 260 }}>Sidebar (fixed with)</div>
    </Layout.Sidebar>
    <Layout.Main>
      <div style={{ backgroundColor: "yellow", height: "100%" }}>Main (fluid width)</div>
    </Layout.Main>
  </Layout>
);

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
