"use client";

import { useEffect, useState } from "react";
import * as shiki from "shiki";

interface CodeHighlightProps {
  code: string;
  lang?: string;
  theme?: string;
}

export function CodeHighlight({
  code,
  lang = "typescript",
  theme = "dracula",
}: CodeHighlightProps) {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    async function highlight() {
      try {
        const html = await shiki.codeToHtml(code, {
          lang,
          theme,
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Failed to highlight code:", error);
        setHighlightedCode(code); // Fallback to plain text
      }
    }

    highlight();
  }, [code, lang, theme]);

  return (
    <div
      className="code-highlight"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
