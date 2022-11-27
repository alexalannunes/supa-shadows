import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { useAtomValue } from "jotai";
import {
  backgroundAtom,
  borderColorAtom,
  borderRadiusAtom,
  colorAtom,
  heightAtom,
  widthAtom,
} from "../pages";

interface Props {
  boxShadow: string;
}

export function Component({ boxShadow }: Props) {
  const color = useAtomValue(colorAtom);
  const background = useAtomValue(backgroundAtom);
  const width = useAtomValue(widthAtom);
  const height = useAtomValue(heightAtom);
  const borderColor = useAtomValue(borderColorAtom);
  const borderRadius = useAtomValue(borderRadiusAtom);
  return (
    <Flex
      as="main"
      flex={1}
      flexShrink={0}
      alignItems="center"
      justifyContent="center"
      bg={color}
    >
      <Box
        w={width + "rem"}
        h={height + "rem"}
        rounded={borderRadius + "rem"}
        bg={background}
        border="1px"
        borderColor={borderColor}
        boxShadow={boxShadow}
      />
    </Flex>
  );
}

const ShadowPreview = memo(Component);
ShadowPreview.displayName = "ShadowPreview";
export { ShadowPreview };
