import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { memo } from "react";
import { useMd } from "../hooks/breakpoints";
import { useShadows } from "../hooks/use-shadows";
import { ShadowsAccordion } from "./shadows-accordion";

function Component() {
  const {
    shadows,
    handleAddSahdow,
    handleToggleActive,
    handleToggleInset,
    handleRemove,
    handleHorizontalOffset,
    handleVerticalOffset,
    handleBlur,
    handleSpread,
    handleColor,
  } = useShadows();

  const [isMd] = useMd();

  if (!isMd) {
    return null;
  }

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
        <Button
          colorScheme="teal"
          size="sm"
          onClick={handleAddSahdow}
          title="add new shadow"
        >
          Add shadow
        </Button>
      </Flex>
      <Box>
        <ShadowsAccordion
          shadows={shadows}
          onToggleActive={handleToggleActive}
          onToggleInset={handleToggleInset}
          onRemove={handleRemove}
          onHorizontalOffset={handleHorizontalOffset}
          onVerticalOffset={handleVerticalOffset}
          onBlur={handleBlur}
          onSpread={handleSpread}
          onColor={handleColor}
        />
      </Box>
    </Box>
  );
}

const ShadowControl = memo(Component);
ShadowControl.displayName = "ShadowControl";
export { ShadowControl };
