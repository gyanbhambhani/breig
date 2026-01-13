"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <div className="pt-20" id="top">
        <Team />
      </div>
      <Footer />
    </main>
  )
}
