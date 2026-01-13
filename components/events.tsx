"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Application and Coffee Chats Open",
    date: "January 20, 2026",
    time: "",
    location: "",
    type: "Recruitment",
  },
  {
    title: "Infosession #1",
    date: "January 21, 2026",
    time: "5:30 PM - 7:00 PM",
    location: "Zoom",
    type: "Info Session",
  },
  {
    title: "Women in Real Estate",
    date: "January 22, 2026",
    time: "TBD",
    location: "The Standard at Berkeley",
    type: "Event",
  },
  {
    title: "Infosession #2",
    date: "January 23, 2026",
    time: "5:30 PM - 7:00 PM",
    location: "Zoom",
    type: "Info Session",
  },
  {
    title: "Application and Coffee Chats Close",
    date: "January 27, 2026",
    time: "All Applications Due at 11:59pm",
    location: "",
    type: "Deadline",
  },
]

export function Events() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    const scrollSpeed = 1

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed

        // Reset to beginning when reaching the end for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section id="recruitment" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent mb-4">Recruitment</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance">
              Join Us This Semester
            </h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-8 lg:px-8 scrollbar-hide"
        >
          <div className="flex gap-6 min-w-max">
            {events.map((event) => (
              <Card
                key={event.title}
                className="bg-card border-border hover:border-primary/30 transition-colors w-80 flex-shrink-0"
              >
                <CardContent className="p-8">
                  <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{event.title}</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
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
