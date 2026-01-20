import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Instagram } from "lucide-react"

const team = [
  {
    name: "Tommy Italia",
    role: "Founder & Partner",
    image: "/images/tommy-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/tommyitalia/",
    instagram: "https://www.instagram.com/tommy.italia/",
    coffeeChat: "https://calendly.com/titalia/coffee-chat-1",
    hometown: "Pasadena, CA",
    grade: "Senior",
    major: "Economics & Rhetoric",
    hobbies: "Golfing, Movie Enthusiast, Backpacking",
    experience: "Serial entrepreneur with two years of private equity investing experience.",
  },
  {
    name: "Zebedee Boggeri",
    role: "Co-President",
    image: "/images/zeb-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/zeb-boggeri/",
    instagram: "https://www.instagram.com/zebbbb_/?hl=en",
    coffeeChat: "https://calendly.com/zeb-bog-berkeley/30min",
    hometown: "Venice Beach, CA",
    grade: "Senior",
    major: "Environmental Economics and Policy",
    hobbies: "Surfing, Skateboarding, Board and Card Games",
    experience: "Private Equity analyst with go-to-market experience at high-growth startups",
  },
  {
    name: "Gyan Bhambhani",
    role: "Co-President",
    image: "/images/gyan-headshot.jpg", // Updated to use Gyan's professional headshot
    linkedin: "https://www.linkedin.com/in/gyanbhambhani/",
    instagram: "https://www.instagram.com/gyan.ofalltrades/",
    coffeeChat: "https://cal.com/gyanb/30min",
    hometown: "Pleasanton, CA",
    grade: "Junior",
    major: "Business Administration (Haas GMP) & Data Science",
    hobbies: "Gearhead, Traveling, MMA",
    experience: "Youngest Realtor in the Bay Area, Serial Founder, AI infrastructure.",
  },
  {
    name: "Sean Madden",
    role: "Vice President of Partnerships",
    image: "/images/marketing-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/sean-madden-b544b3257/",
    instagram: "https://www.instagram.com/seanmmadden/",
    coffeeChat: "",
    hometown: "Marin, CA",
    grade: "Sophomore",
    major: "Economics",
    hobbies: "Golfing, Basketball, Surfing ",
    experience:
      "Commercial real estate investment, loan underwriting, and property management support at Holmes Burrell Real Estate.",
  },
  {
    name: "Uma Shah",
    role: "Vice President of Marketing",
    image: "/images/uma-headshot.jpg", // Added Uma's professional headshot
    linkedin: "https://www.linkedin.com/in/uma-shah-97702728a/",
    instagram: "https://www.instagram.com/umashahh/",
    coffeeChat: "http://calendly.com/umashah-berkeley",
    hometown: "Palo Alto, CA",
    grade: "Sophomore",
    major: "Public Health",
    hobbies: "Hiking, Ceramics, Digital Design",
    experience:
      "Market research, strategic marketing, and digital brand development across consulting, nonprofit, and student-led organizations.",
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
  {
    name: "Jocelyn Lamond",
    role: "Vice President of Community Relations",
    image: "/images/jocelyn-headshot.jpg", // Added Jocelyn's professional headshot
    linkedin: "https://www.linkedin.com/in/jocelyn-lamond-516431392/",
    instagram: "https://www.instagram.com/jocelynlamond/",
    coffeeChat: "https://calendly.com/jocelynlamond-berkeley/30min?month=2026-01",
    hometown: "Venice Beach, CA",
    grade: "Sophomore",
    major: "Neuroscience",
    hobbies: "Crocheting, Yoga, Cooking",
    experience: "Experienced in conflict resolution and communication to build trust across diverse communities.",
  },
  {
    name: "JW Keating",
    role: "Vice President of Finance and Legal",
    image: "/images/jw-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/jw-keating",
    instagram: "https://www.instagram.com/jwkeating8/",
    coffeeChat: "https://calendly.com/jwkeating-berkeley/new-meeting?month=2026-01",
    hometown: "Sacramento, CA",
    grade: "Junior",
    major: "Economics",
    hobbies: "Skiing, Golf, Food",
    experience: "Private equity real estate investment research and market analysis at UBS.",
  },
  {
    name: "Abbas Benhamida",
    role: "Director of Analyst Track",
    image: "/images/abas-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/abbas-benhamida-8419242a7/",
    instagram: "https://www.instagram.com/abbasbenhamida/",
    coffeeChat: "https://calendly.com/abbas_b-berkeley/30min",
    hometown: "Danville, CA",
    grade: "Freshman",
    major: "Analytics & Applied Math",
    hobbies: "Manual Cars, Premier League Soccer, Spanish",
    experience: "Investor-focused service contracts and transaction support as a real estate intern at Compass.",
  },
  {
    name: "Andy Yuan",
    role: "Director of General Membership",
    image: "/images/andy-headshot.jpg", // Updated to use Andy Yuan's professional headshot
    linkedin: "https://www.linkedin.com/in/xiaodi-yuan-26a681282/",
    instagram: "https://www.instagram.com/ssilenc33/",
    coffeeChat: "https://calendly.com/yuanandy66-berkeley/30min",
    hometown: "Newport Beach, CA",
    grade: "Freshman",
    major: "Economics",
    hobbies: "Golf, Chess, Photography",
    experience:
      "Airbnb & Vrbo premier host with 5 years of experience in property management for short-term vacation-home rentals.",
  },
  {
    name: "Yeshasv Bansal",
    role: "Project Coordinator",
    image: "/images/yeshasv-headshot.jpg", // Added Yeshasv's professional headshot
    linkedin: "https://www.linkedin.com/in/yeshasv-bansal/",
    instagram: "https://www.instagram.com/yeshavbansal/",
    coffeeChat: "https://calendly.com/welcome100-berkeley/new-meeting",
    hometown: "San Jose, CA",
    grade: "Freshman",
    major: "Business Administration (Haas GMP)",
    hobbies: "Day Trading, Cars, Poker",
    experience: "Experience in U.S. and Indian real estate investing, algorithmic trading development, and high-pressure problem solving",
  },
  {
    name: "Savannah Westlake",
    role: "Director of Media",
    image: "/images/savannah-headshot.jpg", // Updated to use Savannah's actual headshot
    linkedin: "https://www.linkedin.com/in/savannah-westlake-0794993a4/",
    instagram: "https://www.instagram.com/savannah.w._/",
    coffeeChat: "https://calendly.com/savannahwestlake-berkeley/30min",
    hometown: "Stevenson Ranch, CA",
    grade: "Freshman",
    major: "Economics",
    hobbies: "Snowboarding, Golfing, Content Creation",
    experience: "State-level political research, digital campaign marketing, and legislative affairs.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent mb-4">Leadership</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Our executive board is committed to providing the best experience for all club members.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.role} className="group h-full" style={{ perspective: "1000px" }}>
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-full h-full" style={{ backfaceVisibility: "hidden" }}>
                  <Card className="bg-card border-border overflow-hidden h-full">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
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
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          <Linkedin className="w-7 h-7" />
                        </a>
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          <Instagram className="w-7 h-7" />
                        </a>
                      </div>
                      <div className="flex-1 space-y-3 text-left text-sm">
                        <div>
                          <span className="font-semibold text-foreground">Hometown: </span>
                          <span className="text-muted-foreground">{member.hometown}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Grade: </span>
                          <span className="text-muted-foreground">{member.grade}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Major: </span>
                          <span className="text-muted-foreground">{member.major}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Interests: </span>
                          <span className="text-muted-foreground">{member.hobbies}</span>
                        </div>
                        <div className="pt-1">
                          <span className="font-semibold text-foreground">Professional Experience: </span>
                          <span className="text-muted-foreground">{member.experience}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border">
                        {member.coffeeChat ? (
                          <a
                            href={member.coffeeChat}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-2 px-4 text-center text-sm font-semibold text-accent border-2 border-accent bg-background hover:bg-accent hover:text-background transition-colors rounded-md"
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
          ))}
        </div>
      </div>
    </section>
  )
}
