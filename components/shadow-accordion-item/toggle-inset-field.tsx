import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { memo } from "react";

interface Props {
  id: string;
  inset: boolean;
  onToggleInset: (id: string) => void;
}

const ToggleInset = memo(({ id, inset, onToggleInset }: Props) => {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel mb="0">Inset</FormLabel>
      <Switch
        colorScheme="teal"
        isChecked={inset}
        onChange={() => onToggleInset(id)}
        data-testid="switch-inset"
      />
    </FormControl>
  );
});

ToggleInset.displayName = "ToggleInset";

export { ToggleInset };
