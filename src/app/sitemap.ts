import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date()
    },
    {
      url: "https://acme.com/contact",
      lastModified: new Date()
    },
    {
      url: "https://acme.com/projects",
      lastModified: new Date()
    },
    {
      url: "https://acme.com/experience",
      lastModified: new Date()
    }
  ]
}
