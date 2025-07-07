import SocialsTray from "@/components/SocialsTray"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex grow md:flex-row flex-col w-screen md:items-center items-start p-5 md:space-x-16 ">
      <SocialsTray />
      <div className="md:grow inline-block h-max space-y-6 text-left text-zinc-800 pb-5">
        <Label className="md:text-7xl text-5xl font-extrabold leading-10 uppercase">
          Khush Makadia
        </Label>
        <div className="flex flex-col space-y-4">
          <Label className="text-lg font-normal leading-loose">
            Aloha! I’m a software developer studying Computer Science at the
            University of Illinois at Urbana-Champaign with a passion for
            turning ideas into tangible projects. View my resume{" "}
            <a
              href="/resume.pdf"
              className="text-sky-500 underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here!
            </a>
          </Label>
          <Label className="text-lg font-normal leading-loose">
            Currently, I am a SWE Intern @ Stripe and now an Ex-Director at
            Hack4Impact where we create full-stack software for nonprofits
            around the world to optimize their operations and expand their
            mission. Check out our{" "}
            <a
              href="https://uiuc.hack4impact.org"
              className="text-sky-500 underline-offset-4 hover:underline"
              target="_blank"
            >
              work!
            </a>
          </Label>
          <Label className="text-lg font-normal leading-loose">
            Previously, I was a Software Engineer Intern at Costco and The
            American Marketing Association.
          </Label>
        </div>
      </div>
      <Image
        src="/homepage.png"
        alt="Profile picture on the homepage"
        width={1000}
        height={1000}
        className="hidden lg:flex h-96 w-96 rounded-full"
      />
    </div>
  )
}
