import { Experience } from "@/utils/types"
import { Label } from "./ui/label"
import { numToMonth } from "@/utils/utils"
import Link from "next/link"
import { Button } from "./ui/button"

interface ExperienceProps extends Experience {
  direction: "RIGHT" | "LEFT"
  hide: boolean
}

const ExperienceCard = ({
  company,
  role,
  description,
  link,
  start,
  end,
  direction,
  hide
}: ExperienceProps) => {
  return (
    <div className={`flex flex-row items-center justify-between`}>
      <div
        className={`w-full lg:w-96 text-left flex flex-col ${
          hide
            ? "bg-zinc-300 text-zinc-300 border-zinc-300 select-none"
            : "bg-zinc-200 rounded-2xl shadow border border-zinc-800 text-zinc-800"
        }
      `}
      >
        <div className="w-full flex flex-row pl-2 pt-2 pr-2 pb-4">
          <div className="flex flex-col grow text-justify">
            <Label className=" md:text-2xl text-base font-semibold leading-loose">
              {company}
            </Label>
            <Label className="text-xs md:text-sm font-medium leading-none">
              {role}
            </Label>
          </div>
          {!hide && (
            <Link href={link} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="self-center"
              >
                <Button variant="experience" className="w-8 h-8 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 stroke-zinc-200 stroke-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Button>
              </a>
            </Link>
          )}
        </div>
        <div className="w-full space-y-4 flex flex-col text-left pl-2 pb-2">
          <Label className="md:text-xs text-xs font-light leading-none">
            {description}
          </Label>
          <Label className="md:text-sm text-xs font-medium leading-none">{`${numToMonth(
            start.month
          )} ${start.year} - ${
            end === "Present" ? end : `${numToMonth(end.month)} ${end.year}`
          }`}</Label>
        </div>
      </div>
      {!hide && (
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96.154 96.154"
          transform={`rotate(${direction === "RIGHT" ? `0` : `180`})`}
          className={`md:w-9 md:h-9 h-3 w-3 fill-zinc-800 ${
            direction === "LEFT" ? "order-last" : "order-first"
          }`}
        >
          <g>
            <path
              d="M75.183,0.561L17.578,46.513c-0.951,0.76-0.951,2.367,0,3.126l57.608,45.955c0.689,0.547,1.717,0.709,2.61,0.414
		c0.186-0.061,0.33-0.129,0.436-0.186c0.65-0.351,1.057-1.025,1.057-1.765V2.093c0-0.736-0.405-1.414-1.057-1.762
		c-0.108-0.059-0.253-0.127-0.426-0.184C76.903-0.15,75.874,0.011,75.183,0.561z"
            />
          </g>
        </svg>
      )}
    </div>
  )
}

export default ExperienceCard
