"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Market } from "@/components/market"
import { Footer } from "@/components/footer"

export default function MarketPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28">
        <Market />
      </div>
      <Footer />
    </main>
  )
}
