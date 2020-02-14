// storybook/main.js

const path = require("path");

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-actions", "@storybook/addon-links"],
};
