import { Box } from "@chakra-ui/react";
import { memo, useMemo } from "react";
import { Shadow } from "../types";
import { ShadowAccordionItem } from "./shadow-accordion-item";

interface Props {
  shadows: Shadow[];
  onToggleActive: (id: string) => void;
  onToggleInset: (id: string) => void;
  onRemove: (id: string) => void;
  onHorizontalOffset: (id: string, value: number) => void;
  onVerticalOffset: (id: string, value: number) => void;
  onBlur: (id: string, value: number) => void;
  onSpread: (id: string, value: number) => void;
  onColor: (id: string, value: string) => void;
}

function ShadowsAccordionComponent({
  shadows,
  onToggleActive,
  onToggleInset,
  onRemove,
  onHorizontalOffset,
  onVerticalOffset,
  onBlur,
  onSpread,
  onColor,
}: Props) {
  const canRemoveShadow = useMemo(() => {
    return shadows.length === 1;
  }, [shadows.length]);
  return (
    <Box>
      {shadows.map((item, index) => (
        <ShadowAccordionItem
          key={item.id}
          index={index}
          item={item}
          onToggleActive={onToggleActive}
          onToggleInset={onToggleInset}
          onRemove={onRemove}
          onHorizontalOffset={onHorizontalOffset}
          onVerticalOffset={onVerticalOffset}
          onBlur={onBlur}
          onSpread={onSpread}
          onColor={onColor}
          canRemoveShadow={canRemoveShadow}
        />
      ))}
    </Box>
  );
}
const ShadowsAccordion = memo(ShadowsAccordionComponent);
ShadowsAccordion.displayName = "ShadowsAccordion";
export { ShadowsAccordion };
