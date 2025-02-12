import { vars } from "@hippods/themes";
import * as React from "react";

type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors.$scale;
type Scale = keyof typeof vars.colors.$static.dark.blackAlpha;

export type AccordionProps = {
  defaultActiveItems?: string[];
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionItemProps = {
  children: React.ReactNode[];
  itemName: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionButtonProps = {
  itemName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionPanelProps = {
  itemName?: string;
  isBottomBorder?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type AccordionLeftAddonProps = {
  color?: Color;
  size?: Size;
  scale?: Scale;
  children: React.ReactNode;
};
