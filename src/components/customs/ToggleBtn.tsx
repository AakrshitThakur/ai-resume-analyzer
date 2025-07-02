"use client";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ToggleBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // only render after client-side mount to avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      className="bg-[#79a6b9] data-checked:bg-[#79a6b9] group relative flex h-7 w-14 cursor-pointer rounded-full p-1 ease-in-out focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
      aria-label="Toggle Dark Mode"
      checked={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7 ${
          isDark ? "bg-[#f3ffff]" : "bg-[#20464f]"
        }`}
      />
    </Switch>
  );
}
