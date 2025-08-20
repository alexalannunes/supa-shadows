"use client";

import { Code } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { parseAsJson, useQueryState } from "nuqs";
import { shadowSchema } from "@/schemas";
import { DEFAULT_SHADOWS } from "@/constants/default-values";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { CodeBlock } from "./highlight-syntax";

export function GetCodeButton() {
  const [shadows] = useQueryState(
    "shadows",
    parseAsJson(shadowSchema.parse).withDefault(DEFAULT_SHADOWS)
  );

  const [isCopied, setIsCopied] = useState(false);
  const copyTimer = useRef<NodeJS.Timeout | null>(null);

  const convertShadowsToCode = useMemo(() => {
    return (
      shadows
        .map((shadow, index) => {
          const isLast = index === shadows.length - 1;
          return `${shadow.inset ? "inset" : ""} ${shadow.x}px ${shadow.y}px ${
            shadow.blur
          }px ${shadow.spread}px ${shadow.color}${isLast ? ";" : ","}`;
        })
        // add identations
        .join("\n\t\t\t\t")
    );
  }, [shadows]);

  const css = `.element {
    box-shadow: ${convertShadowsToCode}
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(css);
    setIsCopied(true);
    copyTimer.current = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (copyTimer.current) {
        clearTimeout(copyTimer.current);
      }
    };
  }, []);

  return (
    <Suspense>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Code />
            Show Code
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Copy code 😉</DialogTitle>
          </DialogHeader>

          <CodeBlock lang="css">{css}</CodeBlock>

          <DialogFooter>
            <Button onClick={handleCopyCode}>
              {isCopied ? "Copied" : "Copy"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Suspense>
  );
}
