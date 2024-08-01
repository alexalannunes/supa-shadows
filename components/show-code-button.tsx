import { Button, useDisclosure } from "@chakra-ui/react";
import { CopyCodeDialog } from "./copy-code-dialog";

export function CopyCodeButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={() => onOpen()}>
        Show code
      </Button>

      <CopyCodeDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
}
