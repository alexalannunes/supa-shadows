"use client"; // remove this

import { Header } from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Plus } from "lucide-react";
import { ComponentProps, useId, useState } from "react";

// note: add onChange in all interfaces
interface ShadowFieldBase extends ComponentProps<"div"> {
  label: string;
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  name?: string;
}

interface BoxColorsField extends ComponentProps<"div"> {
  label: string;
  name?: string;
}

type ShadowValuesFieldProps = ShadowFieldBase;
type BoxValuesFieldProps = ShadowFieldBase;

function BoxColorsField({ label }: BoxColorsField) {
  const [value, set] = useState("ffffff");

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
          value={`#${value}`}
          onChange={(e) => set(e.target.value.replace("#", ""))}
        />
        <Input
          value={`#${value}`}
          id={fieldId}
          type="text"
          maxLength={7}
          className="uppercase"
          onChange={(e) => {
            const HEX = "0123456789ABCDEF";
            const value = e.target.value.replace("#", "");
            const lastChar = value[value.length - 1];
            const isValid = HEX.includes(lastChar);
            if (isValid) {
              set(value);
            } else {
              set(value.slice(0, -1));
            }
          }}
        />
      </div>
    </div>
  );
}

// fix input when has 0 value
function ShadowFieldBase({ label, max, min, step = 1 }: ShadowFieldBase) {
  const [value, set] = useState<number | undefined>(0);

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
          value={[value || min || 0]}
          onValueChange={(e) => set(e[0])}
        />
        <Input
          value={value?.toString() || ""}
          id={fieldId}
          type="number"
          className="w-24"
          {...inputProps}
          onChange={(e) => {
            if (e.target.value === "") {
              set(undefined);
              return;
            }

            const value = parseInt(e.target.value);
            if (value < (min || 0)) {
              set(min);
            } else if (value > (max || 100)) {
              set(max);
            } else {
              set(value);
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
  return <ShadowFieldBase min={20} max={800} {...props} />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grid grid-cols-[25%_1fr_25%] flex-1">
        <div className="space-y-0">
          <div className="py-2 px-4 flex justify-between gap-2 items-center border-b border-border h-13">
            <h2 className="font-semibold">Customize Shadows</h2>
            <Button variant="outline">
              <Plus />
              Add shadow
            </Button>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:bg-muted px-4 border-b border-border rounded-none font-semibold">
                Shadow 1
              </AccordionTrigger>
              <AccordionContent className="p-4 space-y-4 animate-fade-in">
                <ShadowValuesField value={32} label="Horizontal offset" />
                <ShadowValuesField label="Vertical offset" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex items-center justify-center border-x border-border">
          <div className="size-52 bg-white shadow" />
        </div>
        <div className="space-y-0">
          <div className="py-2 px-4 flex justify-between gap-2 items-center border-b border-border h-13">
            <h2 className="font-semibold">Box Properties</h2>
          </div>
          <div className="px-4 mt-4 space-y-5">
            <BoxColorsField label="Canvas color" />
            <BoxColorsField label="Background color" />
            <BoxColorsField label="Border color" />
            <BoxValuesField label="Width" min={56} />
            <BoxValuesField label="Height" min={56} />
            <BoxValuesField label="Border radius" min={0} max={500} />
          </div>
        </div>
      </main>
    </div>
  );
}
