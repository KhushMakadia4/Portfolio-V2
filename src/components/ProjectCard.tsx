import Image from "next/image"
import { Label } from "./ui/label"
import { Badge } from "./ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { Project } from "@/utils/types"
import Link from "next/link"
import { Button } from "./ui/button"

const ProjectCard = ({
  name,
  shortDescription,
  longDescription,
  image,
  tech,
  links
}: Project) => {
  const logos = {
    github: (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-4 h-4 lg:w-5 lg:h-5 stroke-0 stroke-zinc-200"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
    deployment: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className="w-4 h-4 lg:w-5 lg:h-5 stroke-2 stroke-zinc-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    article: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className="w-4 h-4 lg:w-5 lg:h-5 stroke-2 stroke-zinc-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </svg>
    )
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="md:w-96 h-max w-80 hover:cursor-pointer hover:bg-zinc-300 flex flex-col text-left bg-zinc-200 rounded-2xl shadow-xl border border-zinc-800 text-zinc-800 overflow-hidden mt-4 mr-8">
          <div className="md:pb-2">
            <Image
              className="w-full select-none"
              src={image}
              alt={`${name}-image`}
              height={900}
              width={1600}
            />
          </div>
          <Label className="md:text-2xl text-xl font-semibold leading-9 pl-2 md:pb-1">
            {name}
          </Label>
          <div className="md:pb-3 pb-2">
            <div className="space-x-2 pl-2 pb-3 h-6 overflow-hidden">
              {tech.map((text: string, i: number) => {
                return (
                  <Badge variant="dark" key={`${i}-${text}-project-badge`}>
                    {text}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-zinc-800 text-zinc-200 p-0 w-full md:w-2/5 overflow-scroll">
        <SheetHeader className="self-start px-4 pt-2">
          <Label className="text-zinc-100 text-md font-normal leading-7">
            Project Showcase
          </Label>
        </SheetHeader>
        <div className="flex flex-col justify-start space-y-5 text-zinc-100 px-4 py-5">
          <div className="flex flex-col space-y-0">
            <Label className=" text-xl md:text-2xl font-semibold ">
              {name}
            </Label>
            <Label className=" text-base md:text-ld font-light">
              {shortDescription}
            </Label>
          </div>
          {/* <AspectRatio ratio={16 / 9}> */}
          <Image
            className="w-full select-none"
            src={image}
            alt="LKjslkjdslkf"
            height={900}
            width={1600}
          />
          {/* </AspectRatio> */}
          <div className="flex flex-col space-y-0">
            <Label className=" text-xl md:text-2xl font-semibold ">About</Label>
            <Label className=" text-base md:text-ld font-light">
              {longDescription}
            </Label>
          </div>
          <div className="flex flex-col space-y-0">
            <Label className=" text-xl md:text-2xl font-semibold ">
              Tech Stack
            </Label>
            <div className="flex-row space-x-2">
              {tech.map((text: string, i: number) => {
                return (
                  <Badge
                    variant="light"
                    key={`sheet-${i}-${text}-project-badge`}
                  >
                    {text}
                  </Badge>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-0">
            <Label className=" text-xl md:text-2xl font-semibold ">Links</Label>
            <div className="flex-row space-x-2">
              {links.github && (
                <Link href={links.github} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button size="social" variant="social">
                      {logos.github}
                    </Button>
                  </a>
                </Link>
              )}
              {links.deployment && (
                <Link href={links.deployment} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button size="social" variant="social">
                      {logos.deployment}
                    </Button>
                  </a>
                </Link>
              )}
              {links.article && (
                <Link href={links.article} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button size="social" variant="social">
                      {logos.article}
                    </Button>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ProjectCard
