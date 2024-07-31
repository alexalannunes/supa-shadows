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
  useToast,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { shadowStringAtom } from "../pages";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalShadows({ isOpen, onClose }: Props) {
  const shadowString = useAtomValue(shadowStringAtom);
  const toast = useToast();

  const ref = useRef<HTMLElement>(null);

  const handleCopy = () => {
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.textContent as string);

      toast({
        title: "Copied",
        colorScheme: "green",
        position: "top",
        status: "success",
        duration: 2000,
      });

      // if (process.env.NODE_ENV === "production") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", "button_click", {
        event_name: "Copy CSS code",
      });
      // }
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
            <pre style={{ whiteSpace: "pre-line" }}>
              <code
                className="hljs language-css"
                ref={ref}
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(
                    `.element {
                        box-shadow: ${shadowString}
                    }`,
                    {
                      language: "css",
                    }
                  ).value,
                }}
              ></code>
            </pre>
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
