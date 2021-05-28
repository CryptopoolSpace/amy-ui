import { Story, Meta } from "@storybook/react";
import Container from "../Container";
import Grid, { GridProps } from "./Grid";

const Template: Story<GridProps> = () => (
  <Container>
    <Container.Row>
      <Grid position="primary">
        <div style={{ border: "1px solid red" }}>Primary Grid</div>
      </Grid>
      <Grid position="secondary">
        <div style={{ border: "1px solid blue" }}>Secondary Grid</div>
      </Grid>
    </Container.Row>
  </Container>
);

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {}
} as Meta;

export const Default = Template.bind({});
Default.args = {};
