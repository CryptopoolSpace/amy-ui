import "!style-loader!css-loader!sass-loader!../src/styles/_global.scss";
import "!style-loader!css-loader!./storybook.css";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    hideNoControlsWarning: true
  },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true
    }
  },
  options: { showPanel: true }
};
