import { vars } from "@hippods/themes"

export type ButtonProps = {
    color?: keyof typeof vars.colors.$scale,
    isDisables?: boolean,
    isLoading?: boolean,
    size?: "xs" | "sm" | "md" | "lg",
    variant?: "solid" | "outline" | "ghost"
} & React.ButtonHTMLAttributes<HTMLButtonElement>