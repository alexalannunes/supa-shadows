import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { memo } from "react";

interface Props {
  id: string;
  active: boolean;
  onToggleActive: (id: string) => void;
}

const ToggleActiveField = memo(({ id, active, onToggleActive }: Props) => {
  return (
    <FormControl w="fit-content" display="flex" alignItems="center">
      <FormLabel mb="0">Active</FormLabel>
      <Switch
        colorScheme="teal"
        isChecked={active}
        onChange={() => onToggleActive(id)}
        data-testid="switch-active"
      />
    </FormControl>
  );
});
ToggleActiveField.displayName = "ToggleActiveField";
export { ToggleActiveField };
