import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { borderColorAtom } from "../../pages";
import { CustomInputColor } from "../custom-input-color";

export function BorderColorField() {
  const [borderColor, setBorderColor] = useAtom(borderColorAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Border color</FormLabel>
      <Flex alignItems="center" gap={2}>
        <CustomInputColor color={borderColor} onChange={setBorderColor} />

        <Input
          type="text"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
          maxLength={7}
          fontFamily="monospace"
        />
      </Flex>
    </FormControl>
  );
}
