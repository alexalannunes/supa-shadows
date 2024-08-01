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
import { heightAtom } from "../../pages";

export function HeightField() {
  const [height, setHeight] = useAtom(heightAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Height</FormLabel>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flex={1} alignItems="center" pr={10}>
          <Slider
            pr={8}
            max={50}
            min={10}
            step={1}
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
  );
}
