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
import { borderRadiusAtom } from "../../pages";

export function BorderRadiusField() {
  const [borderRadius, setBorderRadius] = useAtom(borderRadiusAtom);

  return (
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
  );
}
