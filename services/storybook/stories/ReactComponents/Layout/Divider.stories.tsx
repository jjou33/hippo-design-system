import React from "react"
import "@hippods/react-components-layout/style.css"
import { Box, Divider as _Divider } from "@hippods/react-components-layout"
import { vars } from "@hippods/themes"

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
}

export const Divider = {
  args: {
    color: "pink",
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
}
