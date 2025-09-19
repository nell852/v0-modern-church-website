import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paroisse-saint-esprit.fr"
  const currentDate = new Date()

  const routes = ["", "/about", "/team", "/services", "/accommodation", "/events", "/blog", "/contact"]

  const sitemap: MetadataRoute.Sitemap = []

  // Add French routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    })
  })

  // Add English routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/en${route}`,
      lastModified: currentDate,
      changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
      priority: route === "" ? 0.9 : 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    })
  })

  return sitemap
}
