import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { colorAtom } from "../../pages";
import { CustomInputColor } from "../custom-input-color";

export function CanvasColorField() {
  const [color, setColor] = useAtom(colorAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Canvas color</FormLabel>
      <Flex alignItems="center" gap={2}>
        <CustomInputColor color={color} onChange={setColor} />
        <Input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          maxLength={7}
          fontFamily="monospace"
        />
      </Flex>
    </FormControl>
  );
}
