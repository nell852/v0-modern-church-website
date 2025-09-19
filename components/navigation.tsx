"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Cross, Heart, Calendar, Users, Home, BookOpen, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLocale } from "@/hooks/use-locale"
import { getTranslation } from "@/lib/i18n"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const t = getTranslation(locale)

  const navigationItems = [
    { name: t.nav.home, href: "/", icon: Home },
    { name: t.nav.about, href: "/about", icon: Heart },
    { name: t.nav.team, href: "/team", icon: Users },
    { name: t.nav.services, href: "/services", icon: BookOpen },
    { name: t.nav.accommodation, href: "/accommodation", icon: Home },
    { name: t.nav.events, href: "/events", icon: Calendar },
    { name: t.nav.blog, href: "/blog", icon: BookOpen },
    { name: t.nav.contact, href: "/contact", icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Church Name */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Cross className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground">{t.footer.churchName}</span>
            <span className="text-xs text-muted-foreground">{t.footer.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageToggle currentLocale={locale} />
          <ThemeToggle />
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/accommodation">{t.nav.reserve}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-6">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Cross className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{t.footer.churchName}</span>
                  <span className="text-xs text-muted-foreground">{t.footer.tagline}</span>
                </div>
              </div>

              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>

              <div className="pt-4 border-t space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Langue</span>
                  <LanguageToggle currentLocale={locale} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Thème</span>
                  <ThemeToggle />
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/accommodation" onClick={() => setIsOpen(false)}>
                    {t.nav.reserveAccommodation}
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
