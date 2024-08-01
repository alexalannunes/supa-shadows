import { Button, useDisclosure } from "@chakra-ui/react";
import { MdShare } from "react-icons/md";
import { ShareDialog } from "./share-shadow-dialog";

export function ShareShadowButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="teal"
        size="sm"
        variant={"ghost"}
        onClick={() => onOpen()}
        leftIcon={<MdShare />}
      >
        Share
      </Button>

      <ShareDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
}
