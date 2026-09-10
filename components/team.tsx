"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Instagram } from "lucide-react"

type TeamMember = {
  name: string
  role: string
  image: string
  linkedin?: string
  instagram?: string
  coffeeChat?: string
  hometown: string
  grade: string
  major: string
  hobbies?: string
  experience?: string
}

const executiveBoard: TeamMember[] = [
  {
    name: "Gyan Bhambhani",
    role: "President",
    image: "/images/gyan-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/gyanbhambhani/",
    instagram: "https://www.instagram.com/gyan.ofalltrades/",
    coffeeChat: "https://cal.com/gyanb/30min",
    hometown: "Pleasanton, CA",
    grade: "Class of '27",
    major: "Business Administration",
    hobbies: "Gearhead, Traveling, MMA",
    experience: "Youngest Realtor in the Bay Area, Serial Founder, AI infrastructure.",
  },
  {
    name: "Abbas Benhamida",
    role: "Vice President",
    image: "/images/abas-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/abbas-benhamida-8419242a7/",
    instagram: "https://www.instagram.com/abbasbenhamida/",
    coffeeChat: "https://calendly.com/abbas_b-berkeley/30min",
    hometown: "San Ramon, CA",
    grade: "Class of '29",
    major: "Data Science + Applied Math",
    hobbies: "Manual Cars, Premier League Soccer, Spanish",
    experience: "Investor-focused service contracts and transaction support as a real estate intern at Compass.",
  },
  {
    name: "JW Keating",
    role: "Director of Finance",
    image: "/images/jw-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/jw-keating",
    instagram: "https://www.instagram.com/jwkeating8/",
    coffeeChat: "https://calendly.com/jwkeating-berkeley/new-meeting?month=2026-01",
    hometown: "Sacramento, CA",
    grade: "Class of '27",
    major: "Economics",
    hobbies: "Skiing, Golf, Food",
    experience: "Private equity real estate investment research and market analysis at UBS.",
  },
  {
    name: "Shyla Gupta",
    role: "Director of Internal & External Affairs",
    image: "/images/shyla-headshot.jpg",
    coffeeChat: "https://calendly.com/shyla-gupta/15min",
    hometown: "San Mateo, CA",
    grade: "Class of '29",
    major: "IEOR + Economics + Data Science",
  },
  {
    name: "Sean Madden",
    role: "Director of Outreach",
    image: "/images/marketing-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/sean-madden-b544b3257/",
    instagram: "https://www.instagram.com/seanmmadden/",
    hometown: "San Rafael, CA",
    grade: "Class of '28",
    major: "Economics",
    hobbies: "Golfing, Basketball, Surfing",
    experience:
      "Commercial real estate investment, loan underwriting, and property management support at Holmes Burrell Real Estate.",
  },
  {
    name: "Nico Harris",
    role: "Vice President of Operations",
    image: "/images/nico-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/nico-harris-8466b9286/",
    instagram: "https://www.instagram.com/nicoharris_/",
    coffeeChat: "https://calendly.com/nicobalboni1/breig-coffee-chat",
    hometown: "Orinda, CA",
    grade: "Sophomore",
    major: "Economics",
    hobbies: "Golfing, Backpacking, Watching Sports",
    experience: "Wealth management and residential real estate investment strategy development at Osaic.",
  },
]

const projectLeads: TeamMember[] = [
  {
    name: "Hayk Atanasyan",
    role: "Project Lead",
    image: "/images/hayk-headshot.jpg",
    coffeeChat: "https://calendly.com/hayk-coffee-chat/30min",
    hometown: "Los Angeles, CA",
    grade: "Class of '29",
    major: "Business Administration",
  },
  {
    name: "Jake Pace",
    role: "Project Lead",
    image: "/images/jake-headshot.jpg",
    hometown: "Stevenson Ranch, CA",
    grade: "Class of '29",
    major: "Political Economy",
  },
]

const alumniPartners: TeamMember[] = [
  {
    name: "Tommy Italia",
    role: "Alumni Partner",
    image: "/images/tommy-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/tommyitalia/",
    instagram: "https://www.instagram.com/tommy.italia/",
    coffeeChat: "https://calendly.com/titalia/coffee-chat-1",
    hometown: "Los Angeles, CA",
    grade: "Class of '25",
    major: "Economics + Rhetoric",
    hobbies: "Golfing, Movie Enthusiast, Backpacking",
    experience: "Serial entrepreneur with two years of private equity investing experience.",
  },
  {
    name: "Zebedee Boggeri",
    role: "Alumni Partner",
    image: "/images/zeb-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/zeb-boggeri/",
    instagram: "https://www.instagram.com/zebbbb_/?hl=en",
    coffeeChat: "https://calendly.com/zeb-bog-berkeley/30min",
    hometown: "Los Angeles, CA",
    grade: "Class of '26",
    major: "Environmental Econ & Policy + Data Science",
    hobbies: "Surfing, Skateboarding, Board and Card Games",
    experience: "Private Equity analyst with go-to-market experience at high-growth startups",
  },
]

function MemberCard({
  member,
  isFlipped,
  onToggle,
}: {
  member: TeamMember
  isFlipped: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="group h-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={onToggle}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 lg:group-hover:transform-[rotateY(180deg)] ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-full h-full" style={{ backfaceVisibility: "hidden" }}>
          <Card className="bg-card border-border overflow-hidden h-full">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Card className="bg-card border-border h-full">
            <CardContent className="p-5 h-full flex flex-col">
              {(member.linkedin || member.instagram) && (
                <div className="flex items-center justify-center gap-4 mb-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-7 h-7" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-7 h-7" />
                    </a>
                  )}
                </div>
              )}
              <div className="flex-1 space-y-3 text-left text-sm">
                <div>
                  <span className="font-semibold text-foreground">Hometown: </span>
                  <span className="text-muted-foreground">{member.hometown}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Class: </span>
                  <span className="text-muted-foreground">{member.grade}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Major: </span>
                  <span className="text-muted-foreground">{member.major}</span>
                </div>
                {member.hobbies && (
                  <div>
                    <span className="font-semibold text-foreground">Interests: </span>
                    <span className="text-muted-foreground">{member.hobbies}</span>
                  </div>
                )}
                {member.experience && (
                  <div className="pt-1">
                    <span className="font-semibold text-foreground">Professional Experience: </span>
                    <span className="text-muted-foreground">{member.experience}</span>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                {member.coffeeChat ? (
                  <a
                    href={member.coffeeChat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-4 text-center text-sm font-semibold text-accent border-2 border-accent bg-background hover:bg-accent hover:text-background transition-colors rounded-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Coffee Chat
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full py-2 px-4 text-center text-sm font-semibold text-accent/50 border-2 border-accent/30 bg-background/50 cursor-not-allowed rounded-md"
                  >
                    Coffee Chat
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function TeamGrid({
  members,
  flippedCards,
  toggleFlip,
}: {
  members: TeamMember[]
  flippedCards: Set<string>
  toggleFlip: (name: string) => void
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member) => (
        <MemberCard
          key={member.name}
          member={member}
          isFlipped={flippedCards.has(member.name)}
          onToggle={() => toggleFlip(member.name)}
        />
      ))}
    </div>
  )
}

export function Team() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const toggleFlip = (name: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(name)) {
        newSet.delete(name)
      } else {
        newSet.add(name)
      }
      return newSet
    })
  }

  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">Fall 2026</p>
        </div>

        <TeamGrid
          members={executiveBoard}
          flippedCards={flippedCards}
          toggleFlip={toggleFlip}
        />

        <div className="text-center max-w-3xl mx-auto mt-20 mb-12">
          <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
            Project Leads
          </h3>
        </div>
        <TeamGrid
          members={projectLeads}
          flippedCards={flippedCards}
          toggleFlip={toggleFlip}
        />

        <div className="text-center max-w-3xl mx-auto mt-20 mb-12">
          <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
            Alumni Partners
          </h3>
        </div>
        <TeamGrid
          members={alumniPartners}
          flippedCards={flippedCards}
          toggleFlip={toggleFlip}
        />
      </div>
    </section>
  )
}
