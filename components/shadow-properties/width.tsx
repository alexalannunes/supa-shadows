import {
  Flex,
  FormControl,
  FormLabel,
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
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { widthAtom } from "../../pages";

export function WidthField() {
  const [width, setWidth] = useAtom(widthAtom);

  return (
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
  );
}
