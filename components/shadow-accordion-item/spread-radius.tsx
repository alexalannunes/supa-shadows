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

const SpreadRadius = memo(
  ({
    id,
    value,
    onSpread,
  }: {
    id: string;
    value: number;
    onSpread: (id: string, value: number) => void;
  }) => {
    return (
      <FormControl>
        <FormLabel fontWeight="bold">Spread radius</FormLabel>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flex={1} alignItems="center" pr={10}>
            <Slider
              pr={8}
              max={100}
              min={-100}
              step={1}
              colorScheme="teal"
              defaultValue={30}
              value={value}
              onChange={(e) => onSpread(id, e)}
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
              onChange={(newValue) => onSpread(id, Number(newValue))}
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

SpreadRadius.displayName = "SpreadRadius";
export { SpreadRadius };
