import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation  from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "MAISON NAZARETH | Accueil spirituel et hébergement",
  description:
    "Découvrez notre paroisse catholique moderne. Messes, événements, hébergement spirituel et accompagnement pastoral dans un cadre accueillant.",
  generator: "MVELE NELL",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
          <Analytics />
      </body>
    </html>
  )
}
