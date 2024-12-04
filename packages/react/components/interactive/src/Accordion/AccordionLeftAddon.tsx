import { clsx } from "clsx"
import { AccordionLeftAddonProps } from "./types"
import { accordionLeftAddonStyle } from "./style.css"
import { vars } from "@hippods/themes"
const AccordionLeftAddon = (props: AccordionLeftAddonProps) => {
  const { size = "md", color = "gray", children } = props

  return (
    <div
      className={clsx([
        accordionLeftAddonStyle({
          size,
        }),
      ])}
      style={{ color: vars.colors.$scale[color][900] }}
    >
      {children}
    </div>
  )
}

AccordionLeftAddon.displayName = "AccordionLeftAddon"
export { AccordionLeftAddon }
