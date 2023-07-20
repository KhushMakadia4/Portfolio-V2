import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet"

const NavbarMobile = () => {
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
      <div className="flex px-4">
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <Sheet key="top">
        <SheetTrigger asChild>
          <div className="flex px-4">
            <Button variant="navbar" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10 stroke-zinc-200 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="top" className="bg-zinc-800 text-zinc-200 p-0">
          <SheetHeader className="flex px-4 pt-2">
            <Link href="/">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>KM</AvatarFallback>
              </Avatar>
            </Link>
          </SheetHeader>
          <div className="flex flex-col py-2">
            {routes.map((route, i) => {
              return (
                <Link href={route.link} key={`${i}-${route.name}`}>
                  <Button variant="link">{route.name}</Button>
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default NavbarMobile
