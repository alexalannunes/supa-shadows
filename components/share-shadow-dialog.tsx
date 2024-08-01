import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import "highlight.js/styles/github.css";
import { MdCopyAll } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareDialog({ isOpen, onClose }: Props) {
  const toast = useToast();

  const isClient = typeof window !== "undefined";

  const handleCopy = () => {
    if (isClient) {
      navigator.clipboard.writeText(location.href);

      toast({
        title: "Copied",
        colorScheme: "green",
        position: "top",
        status: "success",
        duration: 2000,
      });

      // if (process.env.NODE_ENV === "production") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", "copy_shadow_url");
      // }
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Copy URL Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <pre style={{ whiteSpace: "pre-line" }}>
              <code>{isClient ? location.href : "Loading..."}</code>
            </pre>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              leftIcon={<MdCopyAll />}
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
