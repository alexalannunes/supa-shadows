import { Button, useDisclosure } from "@chakra-ui/react";
import { ModalShadows } from "./modal";

export function CopyCodeButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={() => onOpen()}>
        Show code
      </Button>

      <ModalShadows isOpen={isOpen} onClose={onClose} />
    </>
  );
}
