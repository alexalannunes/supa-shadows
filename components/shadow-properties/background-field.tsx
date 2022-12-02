import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { backgroundAtom } from "../../pages";
import { CustomInputColor } from "../custom-input-color";

export function BackgroundField() {
  const [background, setBackground] = useAtom(backgroundAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Background color</FormLabel>
      <Flex gap={2} alignItems="center">
        <CustomInputColor color={background} onChange={setBackground} />
        <Input
          type="text"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          maxLength={7}
          fontFamily="monospace"
        />
      </Flex>
    </FormControl>
  );
}
