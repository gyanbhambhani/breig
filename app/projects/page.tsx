"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
