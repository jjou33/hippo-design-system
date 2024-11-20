import "@hippods/react-components-button/style.css"
import { Button } from "@hippods/react-components-button"
import React from "react"

import { ToastProvider, useToast } from "@hippods/react-components-toast"
import "@hippods/react-components-toast/style.css"

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
