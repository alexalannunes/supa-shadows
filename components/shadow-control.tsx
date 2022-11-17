import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import { AccordionShadows } from "./accordion";

export type Shadow = {
  id: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
  inset: boolean;
  active: boolean;
  color: string;
};

interface Props {
  shadows: Shadow[];
  onAddShadow: () => void;
  onToggleActive: (id: string) => void;
  onToggleInset: (id: string) => void;
  onRemove: (id: string) => void;
  onHorizontalOffset: (id: string, value: number) => void;
  onVerticalOffset: (id: string, value: number) => void;
  onBlur: (id: string, value: number) => void;
  onSpread: (id: string, value: number) => void;
  onColor: (id: string, value: string) => void;
}

function Component({
  shadows,
  onAddShadow,
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
    <Box
      as="section"
      w="sm"
      borderRight="1px"
      borderRightColor="gray.300"
      overflowY="auto"
      h="calc(100vh - 64px)"
      className="custom-scrollbar--color-mode"
      _dark={{ bg: "gray.700", borderRightColor: "gray.600" }}
    >
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading fontSize="md">Customize Shadows</Heading>
        <Button colorScheme="teal" size="sm" onClick={onAddShadow}>
          Add shadow
        </Button>
      </Flex>
      <Box>
        <AccordionShadows
          shadows={shadows}
          onToggleActive={onToggleActive}
          onToggleInset={onToggleInset}
          onRemove={onRemove}
          onHorizontalOffset={onHorizontalOffset}
          onVerticalOffset={onVerticalOffset}
          onBlur={onBlur}
          onSpread={onSpread}
          onColor={onColor}
        />
      </Box>
    </Box>
  );
}

const ShadowControl = memo(Component);
ShadowControl.displayName = "ShadowControl";
export { ShadowControl };
