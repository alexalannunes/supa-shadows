import { ShadowValuesFieldProps } from "@/types";
import { ShadowFieldBaseImpl } from "./shadow-field-base";

export function ShadowValuesField({ ...props }: ShadowValuesFieldProps) {
  return <ShadowFieldBaseImpl min={-100} max={100} {...props} />;
}
