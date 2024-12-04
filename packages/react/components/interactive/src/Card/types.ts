import { ReactNode } from "react"

export interface CardRootProps {
  children: ReactNode
  className?: string
  variant?: "elevated" | "outlined"
  maxW?: string | number
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
