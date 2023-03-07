import theme from "../src/styles/theme"
import {themes} from "@storybook/theming"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme
  },
  docs: {
    theme: themes.dark
  }
}