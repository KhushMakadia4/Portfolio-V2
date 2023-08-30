export interface Experience {
  company: string
  role: string
  description: string
  link: string
  start: {
    year: number
    month: number
  }
  end:
    | "Present"
    | {
        year: number
        month: number
      }
}

export interface Project {
  name: string
  image: string
  shortDescription: string
  longDescription: string
  tech: string[]
  links: {
    github?: string
    deployment?: string
    article?: string
  }
}
