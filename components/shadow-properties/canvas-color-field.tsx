import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { colorAtom } from "../../pages";

export function CanvasColorField() {
  const [color, setColor] = useAtom(colorAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Canvas color</FormLabel>
      <Input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        maxLength={7}
        fontFamily="monospace"
      />
    </FormControl>
  );
}
