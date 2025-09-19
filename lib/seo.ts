import type { Metadata } from "next"
import type { Locale } from "./i18n"

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  locale?: Locale
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  url = "https://paroisse-saint-esprit.fr",
  locale = "fr",
}: SEOConfig): Metadata {
  const siteName = "Paroisse Saint-Esprit"
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    keywords: [
      "paroisse",
      "église",
      "catholique",
      "spiritualité",
      "hébergement",
      "accueil",
      "prière",
      "communauté",
      ...keywords,
    ].join(", "),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
      languages: {
        fr: "/",
        en: "/en",
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@paroisse_saint_esprit",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  }
}

export const defaultSEO = {
  fr: {
    title: "Paroisse Saint-Esprit",
    description:
      "Découvrez notre paroisse catholique moderne. Messes, événements, hébergement spirituel et accompagnement pastoral dans un cadre accueillant.",
    keywords: ["messe", "événements", "hébergement spirituel", "accompagnement pastoral"],
  },
  en: {
    title: "Saint-Esprit Parish",
    description:
      "Discover our modern Catholic parish. Masses, events, spiritual accommodation and pastoral support in a welcoming environment.",
    keywords: ["mass", "events", "spiritual accommodation", "pastoral support"],
  },
}
