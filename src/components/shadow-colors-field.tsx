import { BoxColorsFieldProps } from "@/types";
import { useId } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function BoxColorsField({
  label,
  value,
  onChange,
}: BoxColorsFieldProps) {
  const fieldId = useId();
  return (
    <div className="space-y-3">
      <Label htmlFor={fieldId} className="font-semibold">
        {label}
      </Label>

      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger
            className="size-8 rounded-full shrink-0"
            style={{ backgroundColor: value }}
          />
          <PopoverContent className="w-auto p-0">
            <HexAlphaColorPicker
              color={value}
              onChange={(newColor) => onChange?.(newColor)}
            />
          </PopoverContent>
        </Popover>
        <Input
          value={value}
          id={fieldId}
          type="text"
          maxLength={9} // #RRGGBB(AA)
          aria-invalid={!value?.includes("#")}
          className="uppercase"
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
