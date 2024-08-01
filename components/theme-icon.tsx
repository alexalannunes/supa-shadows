import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

export function ThemeIcon({ icon }: { icon: IconType }) {
  return <Icon as={icon} h="6" w="6" />;
}
