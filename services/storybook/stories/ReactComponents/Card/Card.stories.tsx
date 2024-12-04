import React, { useRef } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card } from "@hippods/react-components-interactive"
import "@hippods/react-components-interactive/style.css"

export default {
  title: "React Components/Card",
  component: Card.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  subcomponents: {
    Header: Card.Header,
    Body: Card.Body,
    Footer: Card.Footer,
    Image: Card.Image, // Image 서브컴포넌트 추가
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["elevated", "outlined"],
    },
    horizontal: {
      control: { type: "select" },
      options: ["column", "row"],
    },
  },
} as Meta

type CardStoryArgs = {
  header: string
  body: string
  variant: "elevated" | "outlined"
  imageUrl: string
  maxW: string | number
  horizontal: "column" | "row"
}

const CardComponent: React.FC<CardStoryArgs> = ({
  header,
  body,
  variant,
  imageUrl,
  maxW,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleFocus = () => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Card.Root ref={cardRef} variant={variant} maxW={maxW}>
      <Card.Image src={imageUrl} alt={header} /> {/* 이미지 추가 */}
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        {body}
        <Card.Footer>
          <button onClick={handleFocus}>Scroll to Card</button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  )
}

const HorizonCardComponent: React.FC<CardStoryArgs> = ({
  header,
  body,
  variant,
  imageUrl,
  maxW,
  horizontal,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleFocus = () => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Card.Root
      ref={cardRef}
      variant={variant}
      maxW={maxW}
      horizontal={horizontal}
    >
      <Card.Image src={imageUrl} alt={header} /> {/* 이미지 추가 */}
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Description>{body}</Card.Description>
        <Card.Footer>
          <button onClick={handleFocus}>Scroll to Card</button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  )
}

export const CardStory: StoryObj<CardStoryArgs> = {
  args: {
    header: "This is the Card Header",
    body: "This is the Card Body. You can add any content here.",
    variant: "elevated", // 기본값 설정
    imageUrl: "https://via.placeholder.com/300", // 기본 이미지 URL
    maxW: 200,
    horizontal: "column",
  },
  render: (args) => <CardComponent {...args} />,
}

export const HorizontalCardStory: StoryObj<CardStoryArgs> = {
  args: {
    header: "This is the Card Header",
    body: "This is the Card Body. You can add any content here.",
    variant: "elevated", // 기본값 설정
    imageUrl: "https://via.placeholder.com/300", // 기본 이미지 URL
    maxW: "100%",
    horizontal: "column",
  },
  render: (args) => <HorizonCardComponent {...args} />,
}
