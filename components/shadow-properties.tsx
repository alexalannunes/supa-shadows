import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
interface Props {
  box: any;
  setBox: (box: any) => void;
}
export function Component({ box, setBox }: Props) {
  return (
    <Box
      as="section"
      w="sm"
      borderLeft="1px"
      borderLeftColor="gray.300"
      overflowY="auto"
      h="calc(100vh - 64px)"
      className="custom-scrollbar--color-mode"
      _dark={{ bg: "gray.700", borderLeftColor: "gray.600" }}
      pb={4}
    >
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading fontSize="md">Box Properties</Heading>
      </Flex>

      <VStack spacing={5} p={4}>
        <FormControl>
          <FormLabel fontWeight="bold">Canvas color</FormLabel>
          <Input
            type="text"
            value={box.color}
            onChange={(e) =>
              setBox((prev: any) => ({ ...prev, color: e.target.value }))
            }
            maxLength={7}
            fontFamily="monospace"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Background color</FormLabel>
          <Input
            type="text"
            value={box.background}
            onChange={(e) =>
              setBox((prev: any) => ({ ...prev, background: e.target.value }))
            }
            maxLength={7}
            fontFamily="monospace"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Border color</FormLabel>
          <Input
            type="text"
            value={box.borderColor}
            onChange={(e) =>
              setBox((prev: any) => ({ ...prev, borderColor: e.target.value }))
            }
            maxLength={7}
            fontFamily="monospace"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Border radius</FormLabel>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex flex={1} alignItems="center" pr={10}>
              <Slider
                pr={8}
                max={20}
                step={1}
                min={0}
                aria-label="slider-ex-1"
                colorScheme="teal"
                value={box.borderRadius}
                onChange={(e) =>
                  setBox((prev: any) => ({ ...prev, borderRadius: e }))
                }
              >
                <SliderTrack>
                  <SliderFilledTrack bg="transparent" />
                </SliderTrack>
                <SliderThumb bgColor="teal.400" />
              </Slider>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <NumberInput
                w={20}
                max={50}
                min={10}
                step={1}
                value={box.borderRadius}
                defaultValue={3}
                onChange={(e) =>
                  setBox((prev: any) => ({
                    ...prev,
                    borderRadius: Number(e),
                  }))
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>rem</Text>
            </Flex>
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Width</FormLabel>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex flex={1} alignItems="center" pr={10}>
              <Slider
                max={50}
                min={10}
                step={1}
                aria-label="slider-ex-1"
                colorScheme="teal"
                value={box.width}
                onChange={(e) => setBox((prev: any) => ({ ...prev, width: e }))}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="transparent" />
                </SliderTrack>
                <SliderThumb bgColor="teal.400" />
              </Slider>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <NumberInput
                w={20}
                max={50}
                min={10}
                step={1}
                value={box.width}
                onChange={(e) =>
                  setBox((prev: any) => ({
                    ...prev,
                    width: Number(e),
                  }))
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>rem</Text>
            </Flex>
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Height</FormLabel>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex flex={1} alignItems="center" pr={10}>
              <Slider
                pr={8}
                max={50}
                min={10}
                step={1}
                aria-label="slider-ex-1"
                colorScheme="teal"
                value={box.height}
                onChange={(e) =>
                  setBox((prev: any) => ({ ...prev, height: e }))
                }
              >
                <SliderTrack>
                  <SliderFilledTrack bg="transparent" />
                </SliderTrack>
                <SliderThumb bgColor="teal.400" />
              </Slider>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <NumberInput
                w={20}
                max={50}
                min={10}
                step={1}
                value={box.height}
                defaultValue={3}
                onChange={(e) =>
                  setBox((prev: any) => ({
                    ...prev,
                    height: Number(e),
                  }))
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text>rem</Text>
            </Flex>
          </Flex>
        </FormControl>
      </VStack>
    </Box>
  );
}

const ShadowProperties = memo(Component);
ShadowProperties.displayName = "ShadowProperties";
export { ShadowProperties };
