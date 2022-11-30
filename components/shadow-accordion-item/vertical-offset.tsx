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

const VerticalOffset = memo(
  ({
    id,
    value,
    onVerticalOffset,
  }: {
    id: string;
    value: number;
    onVerticalOffset: (id: string, value: number) => void;
  }) => {
    return (
      <FormControl>
        <FormLabel fontWeight="bold">Vertical offset</FormLabel>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flex={1} alignItems="center" pr={10}>
            <Slider
              pr={8}
              min={-100}
              max={100}
              step={1}
              colorScheme="teal"
              value={value}
              onChange={(e) => onVerticalOffset(id, e)}
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
              onChange={(value) => onVerticalOffset(id, Number(value))}
              min={-100}
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

VerticalOffset.displayName = "VerticalOffset";

export { VerticalOffset };
