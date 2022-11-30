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
import { memo } from "react";

const BlurRadius = memo(
  ({
    id,
    value,
    onBlur,
  }: {
    id: string;
    value: number;
    onBlur: (id: string, value: number) => void;
  }) => {
    return (
      <FormControl>
        <FormLabel fontWeight="bold">Blur radius</FormLabel>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flex={1} alignItems="center" pr={10}>
            <Slider
              pr={8}
              max={100}
              min={0}
              step={1}
              colorScheme="teal"
              value={value}
              onChange={(e) => onBlur(id, e)}
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
              value={value}
              onChange={(newValue) => onBlur(id, Number(newValue))}
              min={0}
              max={100}
              step={1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text>px</Text>
          </Flex>
        </Flex>
      </FormControl>
    );
  }
);

BlurRadius.displayName = "BlurRadius";
export { BlurRadius };
