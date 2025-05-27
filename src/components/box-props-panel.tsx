"use client";

import { parseAsJson, useQueryState } from "nuqs";
import { BoxColorsField } from "./shadow-colors-field";
import { Box } from "@/types";
import { z } from "zod";
import { DEFAULT_BOX } from "@/constants/default-values";
import { BoxValuesField } from "./box-values-field";
import { useCallback } from "react";

const boxSchema = z.object({
  width: z.number().min(0).max(500),
  height: z.number().min(0).max(500),
  radius: z.number().min(0).max(500),
  backgroundColor: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
  borderColor: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
  canvasColor: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
});

export function BoxPropsPanel() {
  const [box, setBox] = useQueryState<Box>(
    "box",
    parseAsJson(boxSchema.parse).withDefault(DEFAULT_BOX)
  );

  // maybe add a debounce here
  const handleBoxValuesChange = useCallback(
    (name: string, /*change type here*/ value: string | number | undefined) => {
      setBox((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [setBox]
  );

  return (
    <div className="space-y-0">
      <div className="py-2 px-4 flex justify-between gap-2 items-center border-b border-border h-13">
        <h2 className="font-semibold">Box Properties</h2>
      </div>
      <div className="px-4 mt-4 space-y-5">
        <BoxColorsField
          onChange={(value) => handleBoxValuesChange("canvasColor", value)}
          value={box.canvasColor}
          name="canvasColor"
          label="Canvas color"
        />
        <BoxColorsField
          onChange={(value) => handleBoxValuesChange("backgroundColor", value)}
          value={box.backgroundColor}
          name="backgroundColor"
          label="Background color"
        />
        <BoxColorsField
          onChange={(value) => handleBoxValuesChange("borderColor", value)}
          value={box.borderColor}
          name="borderColor"
          label="Border color"
        />
        <BoxValuesField
          onChange={(value) => handleBoxValuesChange("width", value)}
          value={box.width}
          name="width"
          label="Width"
        />
        <BoxValuesField
          onChange={(value) => handleBoxValuesChange("height", value)}
          value={box.height}
          name="height"
          label="Height"
        />
        <BoxValuesField
          name="radius"
          label="Border radius"
          min={0}
          max={500}
          value={box.radius}
          onChange={(value) => handleBoxValuesChange("radius", value)}
        />
      </div>
    </div>
  );
}
BoxPropsPanel.displayName = "BoxPropsPanel";
