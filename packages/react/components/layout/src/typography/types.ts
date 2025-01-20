import { classes, vars } from "@hippods/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "@vanilla-extract/css";

export type TextProps = AsElementProps &
  StyleProps & {
    fontSize: keyof typeof classes.typography.text;
    textScale?: keyof typeof vars.colors.$static.dark.blackAlpha;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };

export type HeadingProps = AsElementProps &
  StyleProps & {
    fontSize: keyof typeof classes.typography.heading;
    textScale?: keyof typeof vars.colors.$static.dark.blackAlpha;
    bgScale?: keyof typeof vars.colors.$static.dark.blackAlpha;
  };
