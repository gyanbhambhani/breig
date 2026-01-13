import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">BREIG</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Berkeley Real Estate Investment Group</span>
          </div>

          <div className="flex items-center gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Programs
            </Link>
            <Link href="#events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Berkeley Real Estate Investment Group. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">A registered student organization at UC Berkeley</p>
        </div>
      </div>
    </footer>
  )
}
