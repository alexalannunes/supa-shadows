import {
  Box,
  BoxProps,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";
import "highlight.js/styles/github.css";
import { MdCopyAll } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function CodeBox({ children, ...props }: BoxProps) {
  return (
    <Box
      bg="gray.100"
      _dark={{
        bg: "gray.800",
      }}
      p={4}
      rounded={"md"}
      {...props}
    >
      {children}
    </Box>
  );
}

function getEmbedCode() {
  const { origin, search } = location;
  const pathname = "embed";
  const url = `${origin}/${pathname}${search}`;
  return `<iframe
                      height="200px"
                      width="200px"
                      src="${url}"></iframe>`;
}

export function ShareDialog({ isOpen, onClose }: Props) {
  const toast = useToast();

  const isClient = typeof window !== "undefined";

  const handleCopy = (copyType: "embed" | "url") => {
    if (isClient) {
      const currentUrl = location.href;
      if (copyType === "embed") {
        navigator.clipboard.writeText(getEmbedCode());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag("event", "copy_embed_code");
      } else {
        navigator.clipboard.writeText(currentUrl);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag("event", "copy_shadow_url");
      }

      toast({
        title: "Copied",
        colorScheme: "green",
        position: "top",
        status: "success",
        duration: 2000,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Copy URL Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY={"auto"} maxH="500px">
            <Stack spacing={4}>
              <CodeBox>
                <pre style={{ whiteSpace: "pre-line" }}>
                  <code>{isClient ? location.href : "Loading..."}</code>
                </pre>
              </CodeBox>

              <Heading fontWeight={"normal"} size={"md"}>
                Embed box-shadow
              </Heading>
              <CodeBox mt={2}>
                {isClient ? <code>{getEmbedCode()}</code> : <Spinner />}
              </CodeBox>
            </Stack>
          </ModalBody>

          <ModalFooter gap={3}>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="teal"
              leftIcon={<MdCopyAll />}
              onClick={() => handleCopy("embed")}
            >
              Copy embed code
            </Button>
            <Button
              colorScheme="blue"
              leftIcon={<MdCopyAll />}
              onClick={() => handleCopy("url")}
            >
              Copy URL
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
