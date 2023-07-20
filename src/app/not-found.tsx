import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex bg-zinc-300 min-h-screen min-w-full flex-col items-center justify-center">
      <div>
        <h2>This page does not exist.</h2>
        <p>
          Feel free to go back to the <Link href="/">homepage</Link>
        </p>
      </div>
    </main>
  )
}
