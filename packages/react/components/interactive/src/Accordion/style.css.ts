import { vars } from "@hippods/themes"
import { createVar, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

const resetStyle = style({
  margin: 0,
  padding: 0,
  border: 0,
  background: "none",
})

export const accordionStyle = style([resetStyle])

export const accordionItemStyle = style([
  resetStyle,
  {
    width: "100%",
    borderTop: `1px solid ${vars.colors.$scale.gray[300]}`,

    // @ts-ignore
    "&:last-of-type": {
      borderBottom: `1px solid ${vars.colors.$scale.gray[300]}`,
    },
  },
])

export const accordionButtonStyle = style([
  resetStyle,
  {
    width: "100%",
    padding: "0.5rem 0.75rem",
    gap: "0.625rem",
    display: "flex",
    alignItems: "center",
  },
])

export const panelHeight = createVar()
export const accordionPanelStyle = style([
  resetStyle,
  {
    width: "100%",
    height: panelHeight,
    overflow: "hidden",
    transition: "height 0.3s ease",

    // @ts-ignore
    "& > div[data-name='panel-inner']": {
      padding: "0.5rem 0.75rem 1.25rem",
    },
  },
])

export const accordionLeftAddonStyle = recipe({
  base: {
    margin: 0,
    border: 0,
    display: "flex",
    alignItems: "center",
    position: "relative",

    zIndex: 1,
  },
  variants: {
    size: {
      lg: {
        height: "1.8rem",
        fontSize: vars.typography.fontSize[18],
      },
      md: {
        height: "1.5rem",
        fontSize: vars.typography.fontSize[16],
      },
      sm: {
        height: "1.2rem",
        fontSize: vars.typography.fontSize[14],
      },
      xs: {
        height: "0.9rem",
        fontSize: vars.typography.fontSize[12],
      },
    },
  },
})
