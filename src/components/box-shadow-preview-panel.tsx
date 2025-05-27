"use client";

import { DEFAULT_BOX, DEFAULT_SHADOWS } from "@/constants/default-values";
import { boxSchema, shadowSchema } from "@/schemas";
import { Box, Shadows } from "@/types";
import { parseAsJson, useQueryState } from "nuqs";
import { useMemo } from "react";

export function BoxShadowPreviewPanel() {
  const [shadows] = useQueryState<Shadows[]>(
    "shadows",
    parseAsJson(shadowSchema.parse).withDefault(DEFAULT_SHADOWS)
  );

  const [box] = useQueryState<Box>(
    "box",
    parseAsJson(boxSchema.parse).withDefault(DEFAULT_BOX)
  );

  const buildBoxShadow = useMemo(() => {
    const activeShadows = shadows.filter((shadow) => shadow.active);
    const boxShadow = activeShadows
      .map((shadow) => {
        const { x, y, blur, spread, inset, color } = shadow;
        return `${
          inset ? "inset" : ""
        } ${x}px ${y}px ${blur}px ${spread}px ${color}`.trim();
      })
      .join(", ");
    return boxShadow;
  }, [shadows]);

  const boxStyle = useMemo(() => {
    return {
      width: `${box.width}px`,
      height: `${box.height}px`,
      borderRadius: `${box.radius}px`,
      backgroundColor: box.backgroundColor,
      border: `1px solid ${box.borderColor}`,
      boxShadow: buildBoxShadow,
    };
  }, [box, buildBoxShadow]);

  const canvasStyle = useMemo(
    () => ({
      backgroundColor: box.canvasColor,
    }),
    [box.canvasColor]
  );

  return (
    <div
      className="flex items-center justify-center border-x border-border bg-muted"
      style={canvasStyle}
    >
      <div className="size-52 bg-white shadow rounded-md" style={boxStyle} />
    </div>
  );
}
BoxShadowPreviewPanel.displayName = "BoxShadowPreviewPanel";
