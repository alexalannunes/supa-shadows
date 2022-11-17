import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useToken,
} from "@chakra-ui/react";
interface Props {
  onOpen: () => void;
}
export function Header({ onOpen }: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorModeIcon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
  const [teal400] = useToken("colors", ["teal.400"]);
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
          as="h1"
          _dark={{ color: "teal.200" }}
          color="teal.500"
          fontSize="xl"
        >
          SupaShadows
        </Heading>
      </Flex>
      <Flex gap={4}>
        <Button colorScheme="teal" size="sm" onClick={onOpen}>
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
