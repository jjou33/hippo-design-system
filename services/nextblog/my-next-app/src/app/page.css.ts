import { style } from "@vanilla-extract/css"
import { f } from "@/shared/styles/functions"
import { vars } from "@hippods/themes"
export const main = style([
  f.flexCenterBox,
  f.hScreen,
  f.wScreen,
  {
    backgroundColor: vars.colors.$scale.gray[100],
  },
])

export const typo = style([
  f.color.scale.gray[600],
  {
    fontSize: "24px",
  },
])
