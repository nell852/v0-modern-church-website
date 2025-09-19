import Script from "next/script"

interface StructuredDataProps {
  type: "Organization" | "Event" | "Article"
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

// Organization structured data for the church
export function ChurchStructuredData() {
  const organizationData = {
    name: "Paroisse Saint-Esprit",
    "@type": "ReligiousOrganization",
    url: "https://paroisse-saint-esprit.fr",
    logo: "https://paroisse-saint-esprit.fr/logo.png",
    description:
      "Paroisse catholique moderne offrant messes, événements, hébergement spirituel et accompagnement pastoral.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Rue de la Paix",
      addressLocality: "Paris",
      postalCode: "75001",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-23-45-67-89",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
    sameAs: ["https://facebook.com/paroisse-saint-esprit", "https://instagram.com/paroisse_saint_esprit"],
  }

  return <StructuredData type="Organization" data={organizationData} />
}
