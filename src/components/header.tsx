import { Code, Github, Home } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { GetCodeButton } from "./get-code-button";

export function Header() {
  return (
    <header className="border-b border-border px-4">
      <div className="h-header-height justify-between flex items-center">
        <div className="flex gap-3 items-center">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <Home />
            </Link>
          </Button>
          <h1 className="font-bold font-mono text-teal-500">supa-shadows</h1>
        </div>

        <div className="flex gap-3 items-center">
          <GetCodeButton />
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://github.com/alexalannunes/supa-shadows"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* removed from lib */}
              <Github />
            </Link>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
