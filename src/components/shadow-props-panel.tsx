"use client";

import { BoxColorsField } from "@/components/shadow-colors-field";
import { ShadowValuesField } from "@/components/shadow-values-field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DEFAULT_SHADOW, DEFAULT_SHADOWS } from "@/constants/default-values";
import { shadowSchema } from "@/schemas";
import { Shadows } from "@/types";
import { Plus, X } from "lucide-react";
import { parseAsJson, useQueryState } from "nuqs";
import { useCallback } from "react";

export function ShadowPropsPanel() {
  const [shadows, setShadows] = useQueryState<Shadows[]>(
    "shadows",
    parseAsJson(shadowSchema.parse).withDefault(DEFAULT_SHADOWS)
  );

  // todo: add a way to open the panel when is created

  // maybe add a debounce here
  const handleShadowValuesChange = useCallback(
    (
      name: string,
      /*change type here*/ value: number | string | boolean | undefined,
      index: number
    ) => {
      setShadows((prev) => {
        const newShadows = [...prev];
        newShadows[index] = {
          ...newShadows[index],
          [name]: value,
        };
        return newShadows;
      });
    },
    [setShadows]
  );

  const handleRemove = useCallback(
    (index: number) => {
      setShadows((prev) => {
        return prev.filter((_, i) => i !== index);
      });
    },
    [setShadows]
  );

  const handleAdd = useCallback(() => {
    setShadows((prev) => [...prev, DEFAULT_SHADOW]);
  }, [setShadows]);

  return (
    <div className="space-y-0 overflow-y-auto h-[calc(100vh-var(--header-height))]">
      <div className="py-2 px-4 flex justify-between gap-2 items-center border-b border-border h-13">
        <h2 className="font-semibold">Customize Shadows</h2>
        <Button variant="outline" onClick={handleAdd}>
          <Plus />
          Add shadow
        </Button>
      </div>
      {/* create other component and just pass simple props : memo component */}
      <Accordion type="multiple" defaultValue={["shadow-0"]}>
        {shadows.map((shadow, index) => (
          <AccordionItem value={`shadow-${index}`} key={index}>
            <AccordionTrigger className="hover:bg-muted px-4 border-b border-border rounded-none font-bold">
              Shadow {index + 1}
            </AccordionTrigger>
            <AccordionContent className="p-4 space-y-4 animate-fade-in pl-4 ml-4 border-dashed border-l-2 border-border">
              <div className="flex space-x-3 text-gray-600 font-normal items-center justify-between">
                <div className="flex gap-3 ">
                  <div className="flex gap-2">
                    <Label
                      htmlFor={`shadow-active-${index}`}
                      className="font-semibold"
                    >
                      Active
                    </Label>
                    <Checkbox
                      id={`shadow-active-${index}`}
                      checked={shadow.active}
                      onCheckedChange={(checked) =>
                        handleShadowValuesChange("active", checked, index)
                      }
                    />
                  </div>

                  <div className="flex gap-2">
                    <Label
                      htmlFor={`shadow-inset-${index}`}
                      className="font-semibold"
                    >
                      inset
                    </Label>
                    <Checkbox
                      id={`shadow-inset-${index}`}
                      checked={shadow.inset}
                      onCheckedChange={(checked) =>
                        handleShadowValuesChange("inset", checked, index)
                      }
                    />
                  </div>
                </div>
                <Button
                  disabled={shadows.length === 1}
                  variant={"outline"}
                  size={"icon"}
                  onClick={() => handleRemove(index)}
                  className="size-6 hover:bg-destructive/25 active:bg-destructive/30 hover:border-destructive/40"
                >
                  <X className="size-3" />
                </Button>
              </div>
              <ShadowValuesField
                name="x"
                label="Horizontal offset"
                value={shadow.x}
                onChange={(value) =>
                  handleShadowValuesChange("x", value, index)
                }
              />
              <ShadowValuesField
                name="y"
                label="Vertical offset"
                value={shadow.y}
                onChange={(value) =>
                  handleShadowValuesChange("y", value, index)
                }
              />
              <ShadowValuesField
                name="blur"
                label="Blur radius"
                value={shadow.blur}
                onChange={(value) =>
                  handleShadowValuesChange("blur", value, index)
                }
              />
              <ShadowValuesField
                name="spread"
                label="Spread radius"
                value={shadow.spread}
                onChange={(value) =>
                  handleShadowValuesChange("spread", value, index)
                }
              />
              <BoxColorsField
                name="color"
                label="Color"
                value={shadow.color}
                onChange={(value) =>
                  handleShadowValuesChange("color", value, index)
                }
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

ShadowPropsPanel.displayName = "ShadowPropsPanel";
