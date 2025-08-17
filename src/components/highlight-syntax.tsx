"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BundledLanguage, codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export function CodeBlock(props: Props) {
  const [highlightCode, setHighlightCode] = useState<string | null>(null);
  const { theme } = useTheme();

  const shikiTheme = theme === "light" ? "github-light" : "github-dark";

  useEffect(() => {
    async function highlight() {
      codeToHtml(props.children, {
        lang: props.lang,
        theme: shikiTheme,
      }).then(setHighlightCode);
    }

    highlight();
  }, [props.children, props.lang, shikiTheme]);

  return (
    <div
      className="[&>.shiki]:rounded-md [&>.shiki]:p-2"
      dangerouslySetInnerHTML={{ __html: highlightCode || "" }}
      // contentEditable good idea ?
    />
  );
}
