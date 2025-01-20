import { vars } from "@hippods/themes";
import * as React from "react";
import { forwardRef } from "react";
import { textStyle } from "./style.css";
import { HeadingProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";

const Heading = (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "h1",
    fontSize,
    background,
    color = "gray",
    textScale = 700,
    bgScale = 100,
    children,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[textScale],
        background: background && vars.colors.$scale?.[background]?.[bgScale],
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = forwardRef(Heading);
export { _Heading as Heading };
