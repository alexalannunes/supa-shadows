import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { shadowStringAtom } from "../pages";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export function ModalShadows({ isOpen, onClose }: Props) {
  const shadowString = useAtomValue(shadowStringAtom);

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    if (ref.current) {
      ref.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CSS Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              readOnly
              rows={3}
              ref={ref}
              defaultValue={shadowString}
              fontFamily="monospace"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              leftIcon={<CopyIcon />}
              onClick={handleCopy}
            >
              Copy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
