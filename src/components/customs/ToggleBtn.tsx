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
      className="color-base-100 color-base-content group relative flex h-7 w-15 cursor-pointer rounded-full p-1 ease-in-out focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white"
      aria-label="Toggle Dark Mode"
      checked={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
    >
      <span
        aria-hidden="true"
        className={`inline-block size-5 translate-x-0 rounded-full ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-[2rem] ${isDark ? "bg-white" : "bg-black"}`}
      />
    </Switch>
  );
}
