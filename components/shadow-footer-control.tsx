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
import { useMd } from "../hooks/use-breakpoints";
import { useShadows } from "../hooks/use-shadows";
import { BlurRadiusField } from "./shadow-accordion-item/blur-radius-field";
import { ColorField } from "./shadow-accordion-item/color-field";
import { HorizontalOffsetField } from "./shadow-accordion-item/horizontal-offset-field";
import { SpreadRadiusField } from "./shadow-accordion-item/spread-radius-field";
import { VerticalOffsetField } from "./shadow-accordion-item/vertical-offset-field";
import { useRef, useState } from "react";

interface ShadowTabProps {
  isActive: boolean;
  counter: number;
}
function ShadowTab({ isActive, counter }: ShadowTabProps) {
  return (
    <Tab
      whiteSpace={"nowrap"}
      _dark={{
        color: isActive ? "gray.700" : "gray.300",
      }}
    >
      Shadow {counter}
    </Tab>
  );
}

export function ShadowFooterControl() {
  const [isMd] = useMd();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // TODO remove this rule
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tabListRef = useRef<HTMLDivElement>(null!);

  const {
    shadows,
    handleAddShadow,
    handleHorizontalOffset,
    handleVerticalOffset,
    handleBlur,
    handleSpread,
    handleColor,
  } = useShadows();

  const onAddTab = () => {
    if (
      tabListRef.current &&
      tabListRef.current?.scrollWidth > tabListRef.current?.clientWidth
    ) {
      setTimeout(() => {
        tabListRef.current.scrollLeft += 999999;
      }, 0);
    }
    setActiveTabIndex(shadows.length);
    handleAddShadow();
  };

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
      <Tabs
        variant="soft-rounded"
        colorScheme="teal"
        index={activeTabIndex}
        onChange={setActiveTabIndex}
      >
        <TabList overflowX={"auto"} ref={tabListRef}>
          {shadows.map((item, index) => (
            <ShadowTab
              isActive={index === activeTabIndex}
              counter={index + 1}
              key={item.id}
            />
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
        <Button colorScheme="teal" rounded="full" onClick={onAddTab}>
          Add shadow
        </Button>
      </Flex>
    </Flex>
  );
}
