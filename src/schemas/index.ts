import { z } from "zod";

export const shadowSchema = z.array(
  z.object({
    active: z.boolean(),
    inset: z.boolean(),
    x: z.number().min(-100).max(100),
    y: z.number().min(-100).max(100),
    blur: z.number().min(0).max(100),
    spread: z.number().min(-100).max(100),
    color: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
  })
);

export const boxSchema = z.object({
  width: z.number().min(0).max(500),
  height: z.number().min(0).max(500),
  radius: z.number().min(0).max(500),
  backgroundColor: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
  borderColor: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
  canvasColor: z.string().regex(/^#[0-9A-F]{6}([0-9A-F]{2})?$/i),
});
