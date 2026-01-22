"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const timelineEvents = [
  {
    number: "I",
    date: "JANUARY 27",
    title: "Infosession #1",
    details: "5:30 PM - 7 PM via Zoom",
    color: "gold",
  },
  {
    number: "II",
    date: "JANUARY 28",
    title: "Women in Real Estate Panel",
    details: "7 PM @ The Standard Berkeley, 2580 Bancroft Way",
    color: "navy",
  },
  {
    number: "III",
    date: "JANUARY 29",
    title: "Infosession #2",
    details: "5:30 PM - 7 PM via Zoom",
    color: "gold",
  },
  {
    number: "IV",
    date: "JANUARY 31",
    title: "Applications Due",
    details: "All Applications Close at 11:59 PM",
    color: "navy",
  },
]

export function Events() {
  return (
    <section id="recruitment" className="py-24 lg:py-32 bg-[#e8e4da]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent mb-4">Recruitment</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            Join Us This Semester
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with our team through coffee chats and info sessions
          </p>
        </div>

        <div className="relative space-y-12 lg:space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={event.number} className="flex flex-col items-center text-center">
              {/* Circle with Number */}
              <div
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white font-serif text-2xl lg:text-3xl mb-6 ${
                  event.color === "gold" ? "bg-[#8b7e3d]" : "bg-[#1e3a5f]"
                }`}
              >
                {event.number}
              </div>

              {/* Event Details */}
              <div className="space-y-2">
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">{event.date}</h3>
                <p className="text-xl lg:text-2xl font-medium text-foreground">{event.title}</p>
                <p className="text-base lg:text-lg text-muted-foreground">{event.details}</p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < timelineEvents.length - 1 && (
                <div className="w-0.5 h-12 lg:h-16 bg-border mt-8" />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="https://forms.gle/6sHX57BZFVs7Dwqt8" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-background bg-transparent"
            >
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
