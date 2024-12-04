import "@hippods/react-components-interactive/style.css"
import { Button } from "@hippods/react-components-interactive"
import React from "react"

import { ToastProvider, useToast } from "@hippods/react-components-interactive"
import "@hippods/react-components-interactive/style.css"

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
}

const Example = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  )
}

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
}
