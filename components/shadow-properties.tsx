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
import { useAtom } from "jotai";
import {
  backgroundAtom,
  borderColorAtom,
  borderRadiusAtom,
  colorAtom,
  heightAtom,
  widthAtom,
} from "../pages";

function CanvasColorField() {
  const [color, setColor] = useAtom(colorAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Canvas color</FormLabel>
      <Input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        maxLength={7}
        fontFamily="monospace"
      />
    </FormControl>
  );
}

function BackgroundField() {
  const [background, setBackground] = useAtom(backgroundAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Background color</FormLabel>
      <Input
        type="text"
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        maxLength={7}
        fontFamily="monospace"
      />
    </FormControl>
  );
}

export function Component() {
  const [width, setWidth] = useAtom(widthAtom);
  const [height, setHeight] = useAtom(heightAtom);
  const [borderColor, setBorderColor] = useAtom(borderColorAtom);
  const [borderRadius, setBorderRadius] = useAtom(borderRadiusAtom);

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
        <CanvasColorField />
        <BackgroundField />
        <FormControl>
          <FormLabel fontWeight="bold">Border color</FormLabel>
          <Input
            type="text"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
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
                value={borderRadius}
                onChange={(value) => setBorderRadius(value)}
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
                value={borderRadius}
                defaultValue={3}
                onChange={(e) => setBorderRadius(Number(e))}
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
                value={width}
                onChange={(value) => setWidth(value)}
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
                value={width}
                onChange={(e) => setWidth(Number(e))}
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
                value={height}
                onChange={(value) => setHeight(value)}
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
                value={height}
                defaultValue={3}
                onChange={(value) => setHeight(Number(value))}
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
