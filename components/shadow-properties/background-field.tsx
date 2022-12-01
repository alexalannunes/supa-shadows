import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { backgroundAtom } from "../../pages";

export function BackgroundField() {
  const [background, setBackground] = useAtom(backgroundAtom);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">Background color</FormLabel>
      <Input
        type="text"
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        maxLength={7}
        fontFamily="monospace"
      />
    </FormControl>
  );
}
