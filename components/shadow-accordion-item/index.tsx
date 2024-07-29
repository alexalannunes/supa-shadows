import { CloseIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { memo } from "react";
import { Shadow } from "../../types";
import { BlurRadiusField } from "./blur-radius-field";
import { ColorField } from "./color-field";
import { HorizontalOffsetField } from "./horizontal-offset-field";
import { SpreadRadiusField } from "./spread-radius-field";
import { ToggleActiveField } from "./toggle-active-field";
import { ToggleInsetField } from "./toggle-inset-field";
import { VerticalOffsetField } from "./vertical-offset-field";

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
                <ToggleActiveField
                  id={item.id}
                  active={item.active}
                  onToggleActive={onToggleActive}
                />
                <ToggleInsetField
                  id={item.id}
                  inset={item.inset}
                  onToggleInset={onToggleInset}
                />
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
              <HorizontalOffsetField
                id={item.id}
                value={item.x}
                onHorizontalOffset={onHorizontalOffset}
              />
              <VerticalOffsetField
                id={item.id}
                value={item.y}
                onVerticalOffset={onVerticalOffset}
              />
              <BlurRadiusField id={item.id} value={item.blur} onBlur={onBlur} />
              <SpreadRadiusField
                id={item.id}
                value={item.spread}
                onSpread={onSpread}
              />
              <ColorField
                id={item.id}
                value={item.color}
                onColor={onColor}
                placement="top"
              />
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
