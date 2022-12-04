import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useMd } from "../hooks/breakpoints";
import { useShadows } from "../hooks/use-shadows";
import { BlurRadiusField } from "./shadow-accordion-item/blur-radius-field";
import { ColorField } from "./shadow-accordion-item/color-field";
import { HorizontalOffsetField } from "./shadow-accordion-item/horizontal-offset-field";
import { SpreadRadiusField } from "./shadow-accordion-item/spread-radius-field";
import { VerticalOffsetField } from "./shadow-accordion-item/vertical-offset-field";

export function ShadowFooterControl() {
  const [isMd] = useMd();
  const {
    shadows,
    handleAddSahdow,
    handleHorizontalOffset,
    handleVerticalOffset,
    handleBlur,
    handleSpread,
    handleColor,
  } = useShadows();

  if (isMd) {
    return null;
  }

  return (
    <Flex
      p={4}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="white"
      _dark={{ bg: "gray.700" }}
      sx={{ boxShadow: "0px -4px 10px 0px #0000001a" }}
      overflowY="auto"
      borderTopRadius="lg"
      direction="column"
    >
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          {shadows.map((item, index) => (
            <Tab key={item.id}>Shadow {index + 1}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {shadows.map((item) => (
            <TabPanel key={item.id}>
              <Box>
                <HorizontalOffsetField
                  id={item.id}
                  onHorizontalOffset={handleHorizontalOffset}
                  value={item.x}
                />
                <VerticalOffsetField
                  id={item.id}
                  onVerticalOffset={handleVerticalOffset}
                  value={item.y}
                />
                <BlurRadiusField
                  id={item.id}
                  onBlur={handleBlur}
                  value={item.blur}
                />
                <SpreadRadiusField
                  id={item.id}
                  onSpread={handleSpread}
                  value={item.spread}
                />
                <ColorField
                  id={item.id}
                  onColor={handleColor}
                  value={item.color}
                  placement="top"
                />
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Flex alignItems="center" justify="center">
        <Button colorScheme="teal" rounded="full" onClick={handleAddSahdow}>
          Add shadow
        </Button>
      </Flex>
    </Flex>
  );
}
