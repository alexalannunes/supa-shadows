import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { memo } from "react";

const ToggleActive = memo(
  ({
    id,
    active,
    onToggleActive,
  }: {
    id: string;
    active: boolean;
    onToggleActive: (id: string) => void;
  }) => {
    return (
      <FormControl w="fit-content" display="flex" alignItems="center">
        <FormLabel mb="0">Active</FormLabel>
        <Switch
          colorScheme="teal"
          isChecked={active}
          onChange={() => onToggleActive(id)}
        />
      </FormControl>
    );
  }
);
ToggleActive.displayName = "ToggleActive";
export { ToggleActive };
