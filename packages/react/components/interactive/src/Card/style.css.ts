// Card.css.ts
import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

// 기본 카드 스타일
export const cardBase = style({
  borderRadius: "8px",
  backgroundColor: "#fff", // 기본 배경색
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition: "transform 0.2s, box-shadow 0.2s",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
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

// 이미지 스타일
export const imageStyle = style({
  width: "auto", // 카드 크기에 맞게 이미지를 꽉 채움
  height: "auto", // 자동 높이 조정
  borderRadius: "8px 8px 0 0", // 이미지의 모서리 둥글게 처리 (상단)
  marginBottom: "16px", // 이미지와 본문 간의 간격을 추가
  objectFit: "cover", // 이미지 비율을 유지하면서 크기를 맞춤 (잘리지 않게)
  maxHeight: "300px", // 최대 높이 제한
})

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
  },
  defaultVariants: {
    variant: "elevated", // 기본은 elevated
  },
})