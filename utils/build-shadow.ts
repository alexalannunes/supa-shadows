import { Shadow } from "../types";

export const buildShadow = ({ inset, x, y, blur, spread, color }: Shadow) =>
  `${inset ? "inset" : ""} ${x}px ${y}px ${blur}px ${spread}px ${color}`;
