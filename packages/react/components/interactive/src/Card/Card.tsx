import { forwardRef } from "react"
import {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
  CardRootProps,
  CardTitleProps,
  CardDescriptionProps,
  CardImageProps,
} from "./types"

import {
  bodyStyle,
  footerStyle,
  headerStyle,
  cardVariants,
  imageStyle,
  maxWidthVar,
  maxHeightVar,
  descriptionStyle,
  horizontalVar,
} from "./style.css"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { clsx } from "clsx"

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => (
  <img className={clsx([imageStyle])} src={src} alt={alt} />
)

const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  (
    {
      children,
      className,
      variant = "elevated",
      maxW,
      maxH,
      horizontal,
    }: CardRootProps,
    ref,
  ) => (
    <div
      ref={ref}
      className={clsx([cardVariants({ variant }), className])}
      data-horizontal={horizontal} // data-horizontal 속성 추가
      style={{
        ...assignInlineVars({
          [maxWidthVar]: typeof maxW === "number" ? `${maxW}px` : maxW,
          [maxHeightVar]: typeof maxH === "number" ? `${maxH}px` : maxH,
          [horizontalVar]: horizontal,
        }),
      }}
    >
      {children}
    </div>
  ),
)

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <div className={clsx([headerStyle, className])}>{children}</div>
)

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => (
  <div className={clsx([descriptionStyle])}>{children}</div>
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
>(({ children, className }, ref) => (
  <div ref={ref} className={clsx([bodyStyle, className])}>
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
CardTitle.displayName = "CardTitle"
CardDescription.displayName = "CardDescription"

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
}
