"use client"

import { useIsDesktop } from "@/hooks/useBreakpoint"
import React, { ReactElement } from "react"
import { Button } from "./ui/button"
import Link from "next/link"

const SocialsTray = () => {
  const socials: {
    logo: ReactElement
    link: string
  }[] = [
    {
      logo: (
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-4 h-4 lg:w-5 lg:h-5 stroke-0 stroke-zinc-200"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
        </svg>
      ),
      link: "https://twitter.com/kmak404"
    },
    {
      logo: (
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-4 h-4 lg:w-5 lg:h-5 stroke-0 stroke-zinc-200"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      ),
      link: "https://www.linkedin.com/in/khush-makadia/"
    },
    {
      logo: (
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-4 h-4 lg:w-5 lg:h-5 stroke-0 stroke-zinc-200"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
      link: "https://github.com/KhushMakadia4"
    },
    {
      logo: (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-4 h-4 lg:w-5 lg:h-5 stroke-0 stroke-zinc-200"
        >
          <path d="M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 00-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55 60.35-150.55h84.66v5.16z" />
        </svg>
      ),
      link: "https://medium.com/@kmakadia4"
    },
    {
      logo: (
        <svg
          viewBox="0 0 900 1000"
          fill="currentColor"
          className="w-4 h-4 lg:w-5 lg:h-5 stroke-0 stroke-zinc-200"
        >
          <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
        </svg>
      ),
      link: "mailto:kmakadia4@gmail.com"
    }
  ]

  return (
    <>
      {useIsDesktop() ? (
        <div className="flex flex-col bg-zinc-800 w-max rounded-lg space-y-3 p-2">
          {socials.map((social, i) => {
            return (
              <Link
                href={social.link}
                key={`${i}-${social.link}`}
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Button size="social" variant="social">
                    {social.logo}
                  </Button>
                </a>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="flex bg-zinc-800 h-max rounded-lg space-x-3 p-1">
          {socials.map((social, i) => {
            return (
              <Link
                href={social.link}
                key={`${i}-${social.link}`}
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Button size="social" variant="social">
                    {social.logo}
                  </Button>
                </a>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SocialsTray
