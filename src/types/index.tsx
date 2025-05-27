import { ComponentProps } from "react";

export interface ShadowFieldBase
  extends Omit<ComponentProps<"div">, "onChange"> {
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

// model
export interface Shadows {
  active: boolean;
  inset: boolean;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

// model
export interface Box {
  width: number;
  height: number;
  radius: number;
  backgroundColor: string;
  borderColor: string;
  canvasColor: string;
}

export type ShadowValuesFieldProps = ShadowFieldBase;
export type BoxValuesFieldProps = ShadowFieldBase;

export interface BoxColorsFieldProps
  extends Omit<ComponentProps<"div">, "onChange"> {
  label: string;
  name:
    | keyof Pick<Box, "backgroundColor" | "borderColor" | "canvasColor">
    | keyof Pick<Shadows, "color">;
  value?: string;
  onChange?: (value: string | undefined) => void;
}
