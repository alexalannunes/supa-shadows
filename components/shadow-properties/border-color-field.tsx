import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { borderColorAtom } from "../../pages";

export function BorderColorField() {
  const [borderColor, setBorderColor] = useAtom(borderColorAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Border color</FormLabel>
      <Input
        type="text"
        value={borderColor}
        onChange={(e) => setBorderColor(e.target.value)}
        maxLength={7}
        fontFamily="monospace"
      />
    </FormControl>
  );
}
