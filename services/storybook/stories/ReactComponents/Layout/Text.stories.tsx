import "@hippods/react-components-layout/style.css"
import { Text as _Text } from "@hippods/react-components-layout"
import { classes, vars } from "@hippods/themes"

export default {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
}

export const BoxStory = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "HELLO WORLD",
    color: "gray",
  },
}
