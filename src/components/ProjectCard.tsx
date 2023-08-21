// import { Project } from "@/utils/types"
import Image from "next/image"
import { Label } from "./ui/label"
import { Badge } from "./ui/badge"
import { AspectRatio } from "./ui/aspect-ratio"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

// const ProjectCard = ({
//   name,
//   shortDescription,
//   longDescription,
//   tech,
//   links
// }: Project) => {
const ProjectCard = () => {
  const dummy = [
    "NextJS",
    "Chakra UI",
    "PostgreSQL",
    "Supabase",
    "T3 Stack",
    "Prisma",
    "Prisma"
  ]
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="md:w-96 h-max w-80 hover:bg-zinc-300 flex flex-col text-left bg-zinc-200 rounded-2xl shadow-xl border border-zinc-800 text-zinc-800 overflow-hidden">
          <div className="md:pb-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                className="w-full select-none"
                src="https://via.placeholder.com/1600x900"
                alt="LKjslkjdslkf"
                height={900}
                width={1600}
              />
            </AspectRatio>
          </div>
          <Label className="md:text-2xl text-xl font-semibold leading-9 pl-2 md:pb-1">
            Meraki
          </Label>
          <div className="md:pb-3 pb-2">
            <div className="space-x-2 pl-2 pb-3 h-6 overflow-hidden">
              {dummy.map((text: string, i: number) => {
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
              Meraki
            </Label>
            <Label className=" text-base md:text-ld font-light">
              A data-visualization tool for Indian pre-schools
            </Label>
          </div>
          <AspectRatio ratio={16 / 9}>
            <Image
              className="w-full select-none"
              src="https://via.placeholder.com/1600x900"
              alt="LKjslkjdslkf"
              height={900}
              width={1600}
            />
          </AspectRatio>
          <div className="flex flex-col space-y-0">
            <Label className=" text-xl md:text-2xl font-semibold ">About</Label>
            <Label className=" text-base md:text-ld font-light">
              A data-visualization tool for Indian pre-schools that is using
              many cool technologies to create a visualization of how Indian
              pre-schools are performing in their area. This project is being
              showcased to the government of India for official government use.
            </Label>
          </div>
          <div className="flex flex-col space-y-0">
            <Label className=" text-xl md:text-2xl font-semibold ">
              Tech Stack
            </Label>
            <div className="flex-row space-x-2">
              {dummy.map((text: string, i: number) => {
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
              {dummy.map((text: string, i: number) => {
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
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ProjectCard
