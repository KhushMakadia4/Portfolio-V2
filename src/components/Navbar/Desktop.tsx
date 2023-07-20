"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

const NavbarDesktop = () => {
  const routes: {
    name: string
    link: string
  }[] = [
    {
      name: "Projects",
      link: "/projects"
    },
    {
      name: "Experience",
      link: "/experience"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]

  return (
    <div className="flex min-w-full h-16 bg-zinc-800 items-center justify-between">
      <div className="flex px-10">
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className="flex justify-between px-10 space-x-8">
        {routes.map((route, i) => {
          return (
            <Link href={route.link} key={`${i}-${route.name}`}>
              <Button variant="navbar">{route.name}</Button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavbarDesktop
