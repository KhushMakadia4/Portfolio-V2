"use client"

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavbarMobile from "@/components/Navbar/Mobile"
import { useIsDesktop } from "@/hooks/useBreakpoint"
import NavbarDesktop from "@/components/Navbar/Desktop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khush Makadia",
  description:
    "Hello! My name is Khush Makadia and I am a Computer Science student at UIUC and a Product Manager at Hack4Impact."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-zinc-300 scroll-smooth">
      <body className={inter.className}>
        <main className="flex min-h-screen min-w-full flex-col items-start">
          {useIsDesktop() ? <NavbarDesktop /> : <NavbarMobile />}
          {children}
        </main>
      </body>
    </html>
  )
}
