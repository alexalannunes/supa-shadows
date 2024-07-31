import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useToken,
} from "@chakra-ui/react";
import { useSm } from "../hooks/use-breakpoints";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  onOpen?: () => void;
}
export function Header({ onOpen }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorModeIcon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  const [teal400] = useToken("colors", ["teal.400"]);
  const [isSm] = useSm();
  const router = useRouter();
  return (
    <Flex
      px={8}
      h={16}
      bg="white"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px"
      borderBottomColor="gray.300"
      _dark={{ bg: "gray.700", borderBottomColor: "gray.600" }}
      className="supa-shadows__header"
    >
      <Flex alignItems="center" gap={2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={teal400}
          width={24}
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
            clipRule="evenodd"
          />
        </svg>

        {isSm && (
          <Heading
            as="h1"
            _dark={{ color: "teal.200" }}
            color="teal.500"
            fontSize="xl"
          >
            SupaShadows
          </Heading>
        )}
        <Button
          colorScheme="blue"
          variant={"ghost"}
          as={Link}
          href={"/examples"}
          ml={4}
          isActive={router.pathname === "/examples"}
          size={"sm"}
        >
          Examples
        </Button>
      </Flex>
      <Flex gap={4} alignItems="center">
        <a
          href="https://github.com/alexalannunes/supa-shadows"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit the repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <Button colorScheme="teal" size="sm" onClick={() => onOpen?.()}>
          Show code
        </Button>
        <IconButton
          size="sm"
          onClick={toggleColorMode}
          aria-label="Toggle Theme"
          icon={colorModeIcon}
          color="gray.500"
          _dark={{
            color: "teal.200",
          }}
        />
      </Flex>
    </Flex>
  );
}
