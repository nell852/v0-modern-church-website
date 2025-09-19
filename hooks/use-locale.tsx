"use client"

import { usePathname } from "next/navigation"
import { defaultLocale, locales, type Locale } from "@/lib/i18n"

export function useLocale(): Locale {
  const pathname = usePathname()

  // Extract locale from pathname
  const segments = pathname.split("/")
  const potentialLocale = segments[1] as Locale

  // Check if the first segment is a valid locale
  if (locales.includes(potentialLocale)) {
    return potentialLocale
  }

  return defaultLocale
}
