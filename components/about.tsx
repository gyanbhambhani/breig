import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img src="/images/group.jpg" alt="BREIG leadership team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent mb-4">About Us</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
              The Best Real Estate Community on Campus
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              The Berkeley Real Estate Investment Group (BREIG) is a social-first, community-driven organization for
              undergraduate students at UC Berkeley interested in real estate investing. BREIG provides students of all
              majors and experience levels with practical exposure, real-world insight, and a supportive peer network to
              explore real estate investing, ownership, and operations.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-10">
              Through speaker events, client projects, and career development programming, BREIG connects students with
              industry professionals while building an inclusive, supportive community centered on shared learning and
              real-world insight.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/team" scroll={false}>
            <Button
              size="lg"
              className="bg-background border-2 border-accent text-accent hover:bg-accent hover:text-background transition-colors"
            >
              Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
