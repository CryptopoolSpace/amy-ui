module.exports = (componentName) => ({
  content: `import { Story, Meta } from "@storybook/react";
import ${componentName}, { ${componentName}Props } from "./${componentName}";

const Template: Story<${componentName}Props> = (args) => <${componentName} {...args}></${componentName}>;

export default {
  title: "Components/${componentName}",
  component: ${componentName},
  argTypes: {
  }
} as Meta;

export const Default = Template.bind({});
Default.args = {};
`,
  extension: `.stories.tsx`
});
