import { f } from "@/shared/styles/functions"
import { gridResponsiveStyle } from "@/shared/styles/functions/layout.css"

import { style } from "@vanilla-extract/css"

export const wrapper = style([
  f.wFull,
  {
    display: "grid",
    padding: "1.5rem 1rem",
    gridAutoRows: "minmax(auto)",
  },
  gridResponsiveStyle({
    twoXl: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
    xl: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    lg: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    md: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    sm: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  }),
])
