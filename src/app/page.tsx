import SocialsTray from "@/components/SocialsTray"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

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
            Aloha! I’m Khush, an aspiring software developer with a passion of
            tackling issues and turning ideas into tangible projects. View my
            resume{" "}
            <Link
              href="/resume.pdf"
              className="text-sky-500 underline-offset-4 hover:underline"
            >
              here!
            </Link>
          </Label>
          <Label className="text-lg font-normal leading-loose">
            Currently, I am a software developer at Hack4Imapct where I create
            software for nonprofits to optimize their operations. Check out our{" "}
            <a
              href="https://uiuc.hack4impact.org"
              className="text-sky-500 underline-offset-4 hover:underline"
              target="_blank"
            >
              work!
            </a>
          </Label>
          <Label className="text-lg font-normal leading-loose">
            I’m also studying Computer Science at the University of Illinois at
            Urbana-Champaign. My goal is to attain a masters in Systems Design
            for Software Development projects through this education.{" "}
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
