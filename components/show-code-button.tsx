import { Button, useDisclosure } from "@chakra-ui/react";
import { CopyCodeDialog } from "./copy-code-dialog";
import { useRouter } from "next/router";

export function CopyCodeButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  if (router.pathname === "/examples") return null;

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={() => onOpen()}>
        Show code
      </Button>

      <CopyCodeDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
}
