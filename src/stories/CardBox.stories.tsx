import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Meta, StoryObj } from "@storybook/react"
import { CardBox } from "../components/CardBox";

export default {
  title: "Component/CardBox",
  component: CardBox,
  decorators: [
    (Story) => {
      return (
        <ChakraProvider> 
          {Story()}
        </ChakraProvider>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}