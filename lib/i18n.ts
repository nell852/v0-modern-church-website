export const defaultLocale = "fr"
export const locales = ["fr", "en"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      team: "Équipe",
      services: "Services",
      accommodation: "Hébergement",
      events: "Agenda",
      blog: "Actualités",
      contact: "Contact",
      reserve: "Réserver",
      reserveAccommodation: "Réserver un hébergement",
    },
    theme: {
      toggle: "Basculer le thème",
      light: "Clair",
      dark: "Sombre",
      system: "Système",
    },
    common: {
      loading: "Chargement...",
      readMore: "Lire la suite",
      learnMore: "En savoir plus",
      viewAll: "Voir tout",
      back: "Retour",
    },
    hero: {
      title: "Bienvenue dans notre communauté spirituelle",
      subtitle: "Un lieu d'accueil, de prière et de partage au cœur de la ville",
      cta: "Découvrir nos services",
    },
    footer: {
      churchName: "MAISON NAZARETH",
      tagline: "Accueil & Spiritualité",
      quickLinks: "Liens rapides",
      contact: "Contact",
      followUs: "Suivez-nous",
      allRightsReserved: "Tous droits réservés",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      team: "Team",
      services: "Services",
      accommodation: "Accommodation",
      events: "Events",
      blog: "News",
      contact: "Contact",
      reserve: "Reserve",
      reserveAccommodation: "Reserve accommodation",
    },
    theme: {
      toggle: "Toggle theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    common: {
      loading: "Loading...",
      readMore: "Read more",
      learnMore: "Learn more",
      viewAll: "View all",
      back: "Back",
    },
    hero: {
      title: "Welcome to our spiritual community",
      subtitle: "A place of welcome, prayer and sharing in the heart of the city",
      cta: "Discover our services",
    },
    footer: {
      churchName: "Saint-Esprit Parish",
      tagline: "Welcome & Spirituality",
      quickLinks: "Quick links",
      contact: "Contact",
      followUs: "Follow us",
      allRightsReserved: "All rights reserved",
    },
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
