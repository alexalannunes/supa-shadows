import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { memo } from "react";

const ToggleInset = memo(
  ({
    id,
    inset,
    onToggleInset,
  }: {
    id: string;
    inset: boolean;
    onToggleInset: (id: string) => void;
  }) => {
    return (
      <FormControl display="flex" alignItems="center">
        <FormLabel mb="0">Inset</FormLabel>
        <Switch
          colorScheme="teal"
          isChecked={inset}
          onChange={() => onToggleInset(id)}
        />
      </FormControl>
    );
  }
);

ToggleInset.displayName = "ToggleInset";

export { ToggleInset };
