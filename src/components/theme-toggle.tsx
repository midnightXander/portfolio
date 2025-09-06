'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"


export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-4 text-orange-500" />
      ) : (
        <MoonIcon className="size-4 text-sky-950" />
      )}

      <span className="sr-only">{resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
    </Button>
  )
}

export default ThemeToggle
