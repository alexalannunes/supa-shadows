import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { memo } from "react";

const Color = memo(
  ({
    id,
    value,
    onColor,
  }: {
    id: string;
    value: string;
    onColor: (id: string, value: string) => void;
  }) => {
    return (
      <FormControl>
        <FormLabel fontWeight="bold">Color</FormLabel>
        <Input
          fontFamily="monospace"
          value={value}
          onChange={(e) => onColor(id, e.target.value)}
        />
      </FormControl>
    );
  }
);
Color.displayName = "Color";
export { Color };
