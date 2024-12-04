import { ReactNode } from "react"

export interface CardRootProps {
  children: ReactNode
  className?: string
  variant?: "elevated" | "outlined"
  maxW?: string | number
  horizontal?: string
}

export interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export interface CardBodyProps {
  children: ReactNode
  className?: string
}
export interface CardFooterProps {
  children: ReactNode
  className?: string
}

export interface CardTitleProps {
  children: string
  className?: string
  mt?: string
  mb?: string
  ml?: string
  mr?: string
}

export interface CardDescriptionProps {
  children: string
  color?: string
  fontSize?: string
}
