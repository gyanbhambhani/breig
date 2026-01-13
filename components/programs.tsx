import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent mb-4">Our Programs</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground">
            BREIG offers two membership tracks designed to meet different levels of commitment and career goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* General Membership Card */}
          <Card className="bg-card border-border overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/images/community.jpg" alt="General Membership event" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-8 flex flex-col flex-grow">
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-6 uppercase tracking-tight text-center">
                General Membership
              </h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed flex-grow">
                BREIG is all about community building, which is why we offer a dedicated track for students with a
                general interest in real estate. All BREIG members, analysts or not, receive guidance and support in
                starting to obtain their real estate license. This low-commitment track focuses on bringing together
                like-minded students interested in passive investing and long-term wealth creation, while providing
                opportunities to connect with top real estate professionals and gain firsthand exposure to the industry.
                Whether learning how to build passive income alongside a full-time career or exploring early investment
                opportunities, BREIG provides the knowledge, resources, and network to help you get started.
              </p>
              <Link
                href="https://forms.gle/6sHX57BZFVs7Dwqt8"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-background bg-transparent w-full"
                >
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Analyst Track Card */}
          <Card className="bg-card border-border overflow-hidden flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img src="/images/analyst.jpg" alt="Analyst Program members" className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-8 flex flex-col flex-grow">
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-6 uppercase tracking-tight text-center">
                Analyst Track
              </h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed flex-grow">
                The Analyst Track is designed for students who want to dedicate more time to developing real estate
                investment and financial analysis skills. Analysts learn the core methods and quantitative frameworks
                used by industry professionals to evaluate residential and multifamily properties, including valuation
                modeling, underwriting, and market analysis. Through hands-on projects and guided training, students
                apply these tools to real-world scenarios, gaining practical experience in assessing risk, returns, and
                investment potential from the finance side of real estate.
              </p>
              <Link
                href="https://forms.gle/6sHX57BZFVs7Dwqt8"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-background bg-transparent w-full"
                >
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
