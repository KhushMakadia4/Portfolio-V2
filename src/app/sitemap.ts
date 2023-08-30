import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://khushmakadia.com",
      lastModified: new Date()
    },
    {
      url: "https://khushmakadia.com/contact",
      lastModified: new Date()
    },
    {
      url: "https://khushmakadia.com/projects",
      lastModified: new Date()
    },
    {
      url: "https://khushmakadia.com/experience",
      lastModified: new Date()
    }
  ]
}
