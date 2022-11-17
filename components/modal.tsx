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
import { useRef } from "react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  boxShadow: string;
}
export function ModalShadows({ isOpen, onClose, boxShadow }: Props) {
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
              rows={3}
              ref={ref}
              defaultValue={boxShadow}
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
