import { Box, Flex } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  backgroundAtom,
  borderColorAtom,
  borderRadiusAtom,
  colorAtom,
  heightAtom,
  shadowStringAtom,
  widthAtom,
} from "../pages";
import { useMd } from "../hooks/breakpoints";

export function Component() {
  const color = useAtomValue(colorAtom);
  const background = useAtomValue(backgroundAtom);
  const [width, setWidth] = useAtom(widthAtom);
  const [height, setHeight] = useAtom(heightAtom);
  const borderColor = useAtomValue(borderColorAtom);
  const borderRadius = useAtomValue(borderRadiusAtom);
  const shadowString = useAtomValue(shadowStringAtom);

  const [isMd] = useMd();

  useEffect(() => {
    if (!isMd) {
      setWidth(6);
      setHeight(6);
      return;
    }

    setWidth(16);
    setHeight(16);
  }, [isMd, setWidth, setHeight]);

  return (
    <Flex
      as="main"
      flex={1}
      flexShrink={0}
      alignItems={isMd ? "center" : "flex-start"}
      paddingTop={isMd ? 0 : "2rem"}
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
        boxShadow={shadowString}
      />
    </Flex>
  );
}

const ShadowPreview = memo(Component);
ShadowPreview.displayName = "ShadowPreview";
export { ShadowPreview };
