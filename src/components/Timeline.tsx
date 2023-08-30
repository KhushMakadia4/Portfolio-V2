import { Experience } from "@/utils/types"
import ExperienceCard from "./ExperienceCard"
import { Separator } from "@/components/ui/separator"
import experience from "@/data/experience"

const LargeTimeline = () => {
  return (
    <div className="hidden md:flex flex-row space-x-10">
      <div className="flex flex-row space-x-10">
        <div className="flex flex-col">
          {experience.map((exp: Experience, i: number) => {
            return (
              <div
                key={`${i}-${exp.description}`}
                className="w-full flex flex-col text-zinc-800 py-7"
              >
                <ExperienceCard
                  company={exp.company}
                  role={exp.role}
                  description={exp.description}
                  link={exp.link}
                  start={exp.start}
                  end={exp.end}
                  direction="LEFT"
                  hide={i % 2 === 1}
                />
              </div>
            )
          })}
        </div>
        <div className="py-20">
          <Separator
            orientation="vertical"
            className="bg-zinc-800 text-zinc-800 h-full  border-zinc-800 rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col">
        {experience.map((exp: Experience, i: number) => {
          return (
            <div
              key={`${i}-${exp.description}`}
              className="w-full flex flex-col text-zinc-800 py-7"
            >
              <ExperienceCard
                company={exp.company}
                role={exp.role}
                description={exp.description}
                link={exp.link}
                start={exp.start}
                end={exp.end}
                direction="RIGHT"
                hide={i % 2 === 0}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const SmallTimeline = () => {
  return (
    <div className="flex md:hidden flex-row">
      <div className="flex flex-row space-x-5">
        <div className="py-16">
          <Separator
            orientation="vertical"
            className="bg-zinc-800 text-zinc-800 h-full  border-zinc-800 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          {experience.map((exp: Experience, i: number) => {
            return (
              <div
                key={`${i}-${exp.description}`}
                className="w-full flex flex-col text-zinc-800 py-4"
              >
                <ExperienceCard
                  company={exp.company}
                  role={exp.role}
                  description={exp.description}
                  link={exp.link}
                  start={exp.start}
                  end={exp.end}
                  direction="RIGHT"
                  hide={false}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Timeline = () => {
  return (
    <>
      <LargeTimeline />
      <SmallTimeline />
    </>
  )
}

export default Timeline
