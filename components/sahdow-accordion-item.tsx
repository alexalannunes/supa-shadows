import { CloseIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
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
  Switch,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import { Shadow } from "../types";

interface Props {
  index: number;
  item: Shadow;
  canRemoveShadow: boolean;
  onToggleActive: (id: string) => void;
  onToggleInset: (id: string) => void;
  onRemove: (id: string) => void;
  onHorizontalOffset: (id: string, value: number) => void;
  onVerticalOffset: (id: string, value: number) => void;
  onBlur: (id: string, value: number) => void;
  onSpread: (id: string, value: number) => void;
  onColor: (id: string, value: string) => void;
}

function ShadowAccordionItemComponent({
  index,
  item,
  canRemoveShadow,
  onToggleActive,
  onToggleInset,
  onRemove,
  onHorizontalOffset,
  onVerticalOffset,
  onBlur,
  onSpread,
  onColor,
}: Props) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              data-testid={`accordion-item-${index}`}
              py={3}
              sx={{
                boxShadow: isExpanded ? "0px 6px 8px rgba(0,0,0,0.1)" : "none",
              }}
            >
              <Box flex="1" textAlign="left" fontWeight="bold">
                Shadow {index + 1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <HStack mb={4} spacing={6}>
                <FormControl w="fit-content" display="flex" alignItems="center">
                  <FormLabel mb="0">Active</FormLabel>
                  <Switch
                    colorScheme="teal"
                    isChecked={item.active}
                    onChange={() => onToggleActive(item.id)}
                  />
                </FormControl>
                <FormControl display="flex" alignItems="center">
                  <FormLabel mb="0">Inset</FormLabel>
                  <Switch
                    colorScheme="teal"
                    isChecked={item.inset}
                    onChange={() => onToggleInset(item.id)}
                  />
                </FormControl>
                <IconButton
                  aria-label="Remove shadow"
                  size="xs"
                  bg="red.200"
                  color="red.800"
                  onClick={() => onRemove(item.id)}
                  _hover={{
                    bg: "red.300",
                  }}
                  icon={<CloseIcon w="3" h="3" />}
                  disabled={canRemoveShadow}
                />
              </HStack>
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
                      value={item.x}
                      onChange={(e) => onHorizontalOffset(item.id, e)}
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
                      value={item.x}
                      onChange={(value) =>
                        onHorizontalOffset(item.id, Number(value))
                      }
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
                      value={item.y}
                      onChange={(e) => onVerticalOffset(item.id, e)}
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
                      value={item.y}
                      onChange={(value) =>
                        onVerticalOffset(item.id, Number(value))
                      }
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
                      value={item.blur}
                      onChange={(e) => onBlur(item.id, e)}
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
                      value={item.blur}
                      onChange={(value) => onBlur(item.id, Number(value))}
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
                      value={item.spread}
                      onChange={(e) => onSpread(item.id, e)}
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
                      value={item.spread}
                      onChange={(value) => onSpread(item.id, Number(value))}
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
              <FormControl>
                <FormLabel fontWeight="bold">Color</FormLabel>
                <Input
                  fontFamily="monospace"
                  value={item.color}
                  onChange={(e) => onColor(item.id, e.target.value)}
                />
              </FormControl>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

const ShadowAccordionItem = memo(ShadowAccordionItemComponent);
ShadowAccordionItem.displayName = "ShadowAccordionItem";
export { ShadowAccordionItem };
