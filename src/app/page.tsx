"use client"; // remove this

import { Header } from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { ComponentProps, useId, useState } from "react";

// note: add onChange in all interfaces
interface ShadowFieldBase extends Omit<ComponentProps<"div">, "onChange"> {
  label: string;
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  name:
    | keyof Pick<Shadows, "x" | "y" | "blur" | "spread" | "inset">
    | keyof Pick<Box, "width" | "height" | "radius">;
  onChange?: (value: number | undefined) => void;
}

interface BoxColorsField extends Omit<ComponentProps<"div">, "onChange"> {
  label: string;
  name:
    | keyof Pick<Box, "backgroundColor" | "borderColor" | "canvasColor">
    | keyof Pick<Shadows, "color">;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

type ShadowValuesFieldProps = ShadowFieldBase;
type BoxValuesFieldProps = ShadowFieldBase;

function BoxColorsField({ label, value, onChange }: BoxColorsField) {
  const fieldId = useId();
  return (
    <div className="space-y-3">
      <Label htmlFor={fieldId} className="font-semibold">
        {label}
      </Label>
      <div className="flex items-center gap-4">
        <input
          type="color"
          className="size-8 input-color"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
        <Input
          value={value}
          id={fieldId}
          type="text"
          maxLength={7}
          aria-invalid={!value?.includes("#")}
          className={cn("uppercase", {})}
          onChange={(e) => {
            const HEX = "0123456789ABCDEF";
            const value = e.target.value;
            const lastChar = value[value.length - 1];
            const isValid = HEX.includes(lastChar?.toUpperCase());
            if (isValid) {
              onChange?.(value);
            } else {
              const v = value.slice(0, -1);
              if (!v) {
                onChange?.("#");
              } else {
                onChange?.(v);
              }
            }
          }}
        />
      </div>
    </div>
  );
}

// fix input when has 0 value
function ShadowFieldBase({
  value,
  onChange,
  label,
  max,
  min,
  step = 1,
}: ShadowFieldBase) {
  const fieldId = useId();
  const inputProps = { max, min, step };

  return (
    <div className="space-y-2">
      <Label htmlFor={fieldId} className="font-semibold">
        {label}
      </Label>
      <div className="flex gap-4 items-center">
        <Slider
          {...inputProps}
          value={value ? [value] : [0]}
          onValueChange={(e) => onChange?.(e[0])}
        />
        <Input
          value={value?.toString() || ""}
          id={fieldId}
          type="number"
          className="w-24"
          {...inputProps}
          onChange={(e) => {
            if (e.target.value === "") {
              onChange?.(undefined);
              return;
            }

            const value = parseInt(e.target.value);
            if (value < (min || 0)) {
              onChange?.(min);
            } else if (value > (max || 100)) {
              onChange?.(max);
            } else {
              onChange?.(value);
            }
          }}
        />
        <span className="text-slate-500">px</span>
      </div>
    </div>
  );
}

function ShadowValuesField({ ...props }: ShadowValuesFieldProps) {
  return <ShadowFieldBase min={-100} max={100} {...props} />;
}

function BoxValuesField({ ...props }: BoxValuesFieldProps) {
  return <ShadowFieldBase min={100} max={500} {...props} />;
}

interface Shadows {
  active: boolean;
  inset: boolean;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

interface Box {
  width: number;
  height: number;
  radius: number;
  backgroundColor: string;
  borderColor: string;
  canvasColor: string;
}
// TODO: add nuqs

export default function Home() {
  const [shadows, setShadows] = useState<Shadows[]>([
    {
      active: true,
      inset: false,
      x: 0,
      y: 1,
      blur: 9,
      spread: 0,
      color: "#dedede",
    },
  ]);
  const [box, setBox] = useState<Box>({
    width: 100,
    height: 100,
    radius: 10,
    backgroundColor: "#ffffff",
    borderColor: "#e5e5e5",
    canvasColor: "#f8f8f8",
  });

  const handleShadowValuesChange = (
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
  };

  const handleBoxValuesChange = (
    name: string,
    /*change type here*/ value: string | number | undefined
  ) => {
    setBox((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const buildBoxShadow = () => {
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
  };
  const boxStyle = {
    width: `${box.width}px`,
    height: `${box.height}px`,
    borderRadius: `${box.radius}px`,
    backgroundColor: box.backgroundColor,
    border: `1px solid ${box.borderColor}`,
    boxShadow: buildBoxShadow(),
  };

  const canvasStyle = {
    backgroundColor: box.canvasColor,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grid grid-cols-[25%_1fr_25%] flex-1">
        <div className="space-y-0 overflow-y-auto h-[calc(100vh-var(--header-height))]">
          <div className="py-2 px-4 flex justify-between gap-2 items-center border-b border-border h-13">
            <h2 className="font-semibold">Customize Shadows</h2>
            <Button
              variant="outline"
              onClick={() =>
                setShadows((prev) => [
                  ...prev,
                  {
                    active: true,
                    inset: false,
                    x: 0,
                    y: 1,
                    blur: 9,
                    spread: 0,
                    color: "#323999",
                  },
                ])
              }
            >
              <Plus />
              Add shadow
            </Button>
          </div>
          <Accordion type="multiple" defaultValue={["shadow-0"]}>
            {shadows.map((shadow, index) => (
              <AccordionItem value={`shadow-${index}`} key={index}>
                <AccordionTrigger className="hover:bg-muted px-4 border-b border-border rounded-none font-bold">
                  Shadow {index + 1}
                </AccordionTrigger>
                <AccordionContent className="p-4 space-y-4 animate-fade-in pl-4 ml-4 border-dashed border-l-2 border-border">
                  <div className="flex space-x-3 text-gray-600 font-normal">
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
        <div
          className="flex items-center justify-center border-x border-border bg-muted"
          style={canvasStyle}
        >
          <div
            className="size-52 bg-white shadow rounded-md"
            style={boxStyle}
          />
        </div>
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
              onChange={(value) =>
                handleBoxValuesChange("backgroundColor", value)
              }
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
      </main>
    </div>
  );
}
