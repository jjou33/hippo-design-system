"use client"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionLeftAddon,
} from "@hippods/react-components-accordion"
import { Text, Heading } from "@hippods/react-components-layout"

export default function ClientButton() {
  return (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <AccordionLeftAddon size="lg">
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
  )
}
