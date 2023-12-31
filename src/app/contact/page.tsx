"use client"

import ContactForm from "@/components/ContactForm"
import SocialsTray from "@/components/SocialsTray"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Contact() {
  return (
    <div className="flex grow md:flex-row flex-col w-screen md:items-center items-start p-5 md:space-x-16 ">
      <SocialsTray />
      <div className="md:grow flex flex-col h-max text-left text-zinc-800 md:pr-80">
        <Label className="md:text-7xl text-5xl font-extrabold leading-10">
          Contact me
        </Label>
        <Label className="md:text-2xl text-zinc-800 text-xl font-normal leading-7 pl-1 md:mt-0 mt-2">
          Get in touch with me and we can work together!
        </Label>
        <Separator className="bg-zinc-800 pl-1 md:mb-4" />
        <ContactForm />
      </div>
    </div>
  )
}
