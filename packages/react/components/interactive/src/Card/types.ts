import { PropsWithChildren, ReactNode } from "react"

export interface CardRootProps extends PropsWithChildren {
  className?: string
  variant?: "elevated" | "outlined"
  maxW?: string | number
  maxH?: string | number
  horizontal?: string
}

export interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export interface CardImageProps {
  src: string
  alt: string
  size?: number | string // 크기를 숫자(px) 또는 문자열(%)로 받음
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
