import { Label } from "./ui/label"

const Footer = () => {
  return (
    <Label className="hidden xl:flex h-10 text-black text-md pl-36 font-thin leading-loose flex-nowrap">
      *This portfolio was designed in
      <a
        href="https://www.figma.com"
        className="text-sky-500 underline-offset-4 hover:underline mx-1"
        target="_blank"
      >
        Figma,
      </a>
      created with
      <a
        href="https://nextjs.org/"
        className="text-sky-500 underline-offset-4 hover:underline mx-1"
        target="_blank"
      >
        NextJS,
      </a>
      used
      <a
        href="https://ui.shadcn.com/"
        className="text-sky-500 underline-offset-4 hover:underline mx-1"
        target="_blank"
      >
        Shadcn/ui
      </a>
      as a component library, and styled with
      <a
        href="https://tailwindcss.com/"
        className="text-sky-500 underline-offset-4 hover:underline mx-1"
        target="_blank"
      >
        TailwindCSS
      </a>
    </Label>
  )
}

export default Footer
