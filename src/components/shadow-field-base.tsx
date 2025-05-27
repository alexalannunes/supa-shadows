"use client";

import { ShadowFieldBase } from "@/types";
import { useId } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";

export function ShadowFieldBaseImpl({
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
