import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";

export function Component({ boxShadow, box }: { boxShadow: string; box: any }) {
  return (
    <Flex
      as="main"
      flex={1}
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
      bg={box.color}
    >
      <Box
        w={box.width + "rem"}
        h={box.height + "rem"}
        rounded={box.borderRadius + "rem"}
        bg={box.background}
        border="1px"
        borderColor={box.borderColor}
        boxShadow={boxShadow}
      />
    </Flex>
  );
}

const ShadowPreview = memo(Component);
ShadowPreview.displayName = "ShadowPreview";
export { ShadowPreview };
