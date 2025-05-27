import { BoxValuesFieldProps } from "@/types";
import { ShadowFieldBaseImpl } from "./shadow-field-base";

export function BoxValuesField({ ...props }: BoxValuesFieldProps) {
  return <ShadowFieldBaseImpl min={200} max={500} {...props} />;
}
