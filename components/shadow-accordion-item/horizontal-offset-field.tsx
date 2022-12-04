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

interface Props {
  id: string;
  value: number;
  onHorizontalOffset: (id: string, value: number) => void;
}

const HorizontalOffsetField = memo(
  ({ id, value, onHorizontalOffset }: Props) => {
    return (
      <FormControl>
        <FormLabel fontWeight="bold">Horizontal offset</FormLabel>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flex={1} alignItems="center" pr={10}>
            <Slider
              pr={8}
              min={-100}
              max={100}
              step={1}
              colorScheme="teal"
              value={value}
              onChange={(e) => onHorizontalOffset(id, e)}
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
              onChange={(newValue) => onHorizontalOffset(id, Number(newValue))}
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
HorizontalOffsetField.displayName = "HorizontalOffsetField";

export { HorizontalOffsetField };
