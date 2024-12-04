import "@hippods/react-components-interactive/style.css"
import { Select } from "@hippods/react-components-interactive"
import React from "react"

import "@hippods/react-components-layout/style.css"

export default {
  title: "React Components/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export const SelectStory = {
  render: () => (
    <Select>
      <option value="1">1</option>
      <option value="2">2</option>
    </Select>
  ),
}
