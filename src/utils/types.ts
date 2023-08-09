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
