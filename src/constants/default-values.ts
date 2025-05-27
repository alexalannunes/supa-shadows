import { Shadows } from "@/types";

export const DEFAULT_SHADOWS: Shadows[] = [
  {
    active: true,
    inset: false,
    x: 0,
    y: 1,
    blur: 9,
    spread: 0,
    color: "#dededec9",
  },
];

export const DEFAULT_SHADOW = DEFAULT_SHADOWS[0];

export const DEFAULT_BOX = {
  width: 200,
  height: 200,
  radius: 10,
  backgroundColor: "#ffffff",
  borderColor: "#e5e5e5",
  canvasColor: "#f8f8f8",
};
