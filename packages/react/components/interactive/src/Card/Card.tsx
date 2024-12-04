import { forwardRef } from "react"
import {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
  CardRootProps,
} from "./types"

import {
  bodyStyle,
  footerStyle,
  headerStyle,
  cardVariants,
  imageStyle,
  maxWidthVar,
} from "./style.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { clsx } from "clsx"

// 카드 이미지 컴포넌트
const CardImage = forwardRef<HTMLImageElement, { src: string; alt: string }>(
  ({ src, alt }, ref) => (
    <img ref={ref} src={src} alt={alt} className={imageStyle} />
  ),
)

const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  ({ children, className, variant = "elevated", maxW }, ref) => (
    <div
      ref={ref}
      className={clsx([cardVariants({ variant }), className])}
      style={assignInlineVars({
        [maxWidthVar]: typeof maxW === "number" ? `${maxW}px` : maxW || "100%",
      })}
    >
      {children}
    </div>
  ),
)

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={clsx([headerStyle, className])}>
      {children}
    </div>
  ),
)

const CardBody = forwardRef<
  HTMLDivElement,
  CardBodyProps & { imageUrl?: string }
>(({ children, className, imageUrl }, ref) => (
  <div ref={ref} className={clsx([bodyStyle, className])}>
    {imageUrl && <img src={imageUrl} alt="Card Image" className={imageStyle} />}
    {children}
  </div>
))

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={clsx([footerStyle, className])}>
      {children}
    </div>
  ),
)

CardRoot.displayName = "CardRoot"
CardHeader.displayName = "CardHeader"
CardBody.displayName = "CardBody"
CardFooter.displayName = "CardFooter"
CardImage.displayName = "CardImage"

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
}
