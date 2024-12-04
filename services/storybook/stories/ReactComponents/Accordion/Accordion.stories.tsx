import "@hippods/react-components-interactive/style.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionLeftAddon,
} from "@hippods/react-components-interactive"
import React from "react"

import "@hippods/react-components-layout/style.css"
import { Text, Heading } from "@hippods/react-components-layout"

export default {
  title: "React Components/Accordion",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export const AccordionStory = {
  render: () => (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "100%" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <Heading color="gray" fontSize="sm">
            목록 1
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 2
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
}

export const AccordionTestStory = {
  args: {
    items: [
      {
        name: "목록1",
        content: "내용입니다.",
      },
      {
        name: "목록2",
        content: "내용입니다.\n내용입니다.",
      },
    ],
    defaultActiveItems: [],
  },
  render: ({ defaultActiveItems, items }) => (
    <Accordion
      defaultActiveItems={defaultActiveItems}
      style={{ width: "100%" }}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.name} itemName={item.name}>
          <AccordionButton data-testid={`button-${index}`}>
            <Heading color="gray" fontSize="lg">
              {item.name}
            </Heading>
          </AccordionButton>
          <AccordionPanel data-testid={`panel-${index}`}>
            <Text color="gray" fontSize="md">
              {item.content}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const AccordionLeftAddonStory = {
  render: () => (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "100%" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <AccordionLeftAddon size="sm">
            <svg
              width="auto"
              height="auto"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.8037 5H10.1963C9.01796 5 8.09502 6.01352 8.205 7.18668L10.8925 35.8534C10.959 36.5632 11.3984 37.1839 12.0457 37.4826L23.1619 42.6132C23.6937 42.8586 24.3063 42.8586 24.8381 42.6132L35.9543 37.4826C36.6016 37.1839 37.041 36.5632 37.1075 35.8534L39.795 7.18668C39.905 6.01352 38.982 5 37.8037 5Z"
                fill="#2F88FF"
                stroke="#000000"
                strokeWidth="4"
              />
              <path
                d="M32 12H16L17 21H31L30 32L24 35L18 32L17.5 27"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AccordionLeftAddon>
          <Heading color="gray" fontSize="sm">
            목록 1
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <AccordionLeftAddon>
            <svg
              width="auto"
              height="auto"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.8037 5H10.1963C9.01796 5 8.09502 6.01352 8.205 7.18668L10.8925 35.8534C10.959 36.5632 11.3984 37.1839 12.0457 37.4826L23.1619 42.6132C23.6937 42.8586 24.3063 42.8586 24.8381 42.6132L35.9543 37.4826C36.6016 37.1839 37.041 36.5632 37.1075 35.8534L39.795 7.18668C39.905 6.01352 38.982 5 37.8037 5Z"
                fill="#2F88FF"
                stroke="#000000"
                strokeWidth="4"
              />
              <path
                d="M32 12H16L17 21H31L30 32L24 35L18 32L17.5 27"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AccordionLeftAddon>
          <Heading color="gray" fontSize="lg">
            목록 2
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
}
