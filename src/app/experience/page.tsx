import Timeline from "@/components/Timeline"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Experience() {
  return (
    <div className="flex grow md:flex-row flex-col p-5 md:space-x-16 ">
      <div className="md:grow flex flex-col h-max text-left text-zinc-800 md:pl-12 pl-1">
        <Label className="md:text-7xl text-5xl font-extrabold leading-10 md:mt-8">
          Experience
        </Label>
        <Label className="md:text-2xl text-zinc-800 text-xl font-normal leading-7 md:mt-0 mt-2">
          Check out my experience with Computer Science!
        </Label>
        <Separator className="bg-zinc-800 pl-1 md:mb-4" />
        <Timeline />
      </div>
    </div>
  )
}
