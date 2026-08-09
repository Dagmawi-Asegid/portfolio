"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server can't know the theme stored in localStorage, so resolvedTheme
  // is undefined until next-themes resolves it client-side; gating on mount
  // avoids rendering the wrong icon and mismatching the server-rendered HTML.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-surface-border bg-surface text-muted transition-colors hover:border-accent-dim/50 hover:text-foreground"
    >
      {mounted && (isDark ? <LuSun size={14} /> : <LuMoon size={14} />)}
    </button>
  );
}
