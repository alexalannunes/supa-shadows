import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  useColorMode,
  useToken,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ShareShadowButton } from "./share-button";
import { CopyCodeButton } from "./show-code-button";
import { ThemeIcon } from "./theme-icon";

export function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorModeIcon =
    colorMode === "light" ? (
      <ThemeIcon icon={MdDarkMode} />
    ) : (
      <ThemeIcon icon={MdLightMode} />
    );
  const [teal400] = useToken("colors", ["blue.400"]);
  const router = useRouter();

  const isExamplePage = router.pathname === "/examples";

  const handleGtagGithub = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", "github_repo");
  };

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

        <Heading
          as={Link}
          href={"/"}
          _dark={{ color: "teal.200" }}
          color="teal.500"
          fontSize="xl"
        >
          SupaShadows
        </Heading>
      </Flex>
      <HStack spacing={4} alignItems="center">
        <HStack spacing={0}>
          <Button
            colorScheme="teal"
            variant={isExamplePage ? "solid" : "ghost"}
            as={Link}
            href={"/examples"}
            ml={4}
            size={"sm"}
            fontWeight={"bold"}
          >
            Examples
          </Button>

          <ShareShadowButton />
        </HStack>

        <CopyCodeButton />

        <Link
          href="https://github.com/alexalannunes/supa-shadows"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit the repository"
          style={{ display: "flex" }}
          onClick={handleGtagGithub}
        >
          <Icon as={FaGithub} boxSize={6} />
        </Link>
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
      </HStack>
    </Flex>
  );
}
