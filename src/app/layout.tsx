import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

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
      <body className={inter.className} suppressHydrationWarning>
        <main className="flex min-h-screen min-w-screen flex-col items-start">
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  )
}
