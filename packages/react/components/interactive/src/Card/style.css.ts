// Card.css.ts
import { createVar, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

export const maxWidthVar = createVar()
export const maxHeightVar = createVar()
export const horizontalVar = createVar()
// 기본 카드 스타일

export const cardBase = style({
  vars: {
    [maxWidthVar]: "300px",
    [maxHeightVar]: "600px",
    [horizontalVar]: "column",
  },
  borderRadius: "8px",
  backgroundColor: "#fff", // 기본 배경색
  display: "flex",
  flexDirection: horizontalVar,
  overflow: "hidden",
  maxWidth: maxWidthVar,
  maxHeight: maxHeightVar,
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },

    '&[data-horizontal="row"]': {
      maxWidth: "600px",
      maxHeight: "300px",
    },
  },
})

export const titleStyle = style({
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "1.75rem",
})

export const descriptionStyle = style({
  color: "black",
  fontSize: "12px",
})
// 헤더 스타일
export const headerStyle = style({
  padding: "16px",
  fontWeight: "bold",
  borderBottom: "1px solid #eee",
  backgroundColor: "#f7f7f7",
})

// 본문 스타일
export const bodyStyle = style({
  padding: "16px",
  flexGrow: 1,
})

export const imageStyle = style({
  position: "relative",
  display: "inline-block",
  overflow: "hidden",
  width: "auto", // 기본 너비
  height: "auto", // 기본 높이
  borderRadius: "8px 8px 0 0", // 필요에 따라 둥글게 처리

  minWidth: 100,
  minHeight: 100,
  objectFit: "cover",
  selectors: {
    // 내부 img 태그 스타일
    '[data-horizontal="row"] &': {
      borderRadius: "8px 0 0 8px", // 부모가 row일 때 왼쪽 둥글게
      objectFit: "cover",
      aspectRatio: "1/1",
    },
  },
})
// 이미지 스타일

// 푸터 스타일
export const footerStyle = style({
  padding: "16px",
  borderTop: "1px solid #eee",
})

// 카드 스타일에 variant 추가
export const cardVariants = recipe({
  base: cardBase,
  variants: {
    variant: {
      elevated: {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 그림자만 다르게 설정
      },
      outlined: {
        border: "1px solid rgba(0, 0, 0, 0.1)", // 외곽선만 추가
        boxShadow: "none", // 그림자는 제거
      },
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    variant: "elevated", // 기본은 elevated
  },
})
