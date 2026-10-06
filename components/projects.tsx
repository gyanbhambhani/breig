import { PageIntro } from "@/components/page-intro"
import { projects } from "@/lib/publishing"

export function Projects() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageIntro
          eyebrow="Work"
          title="Projects"
          lede="Client work and analyst underwriting, written up as each project moves forward. New summaries are added here as the group takes them on."
        />

        {projects.length === 0 ? (
          <div className="border-b border-border py-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Pipeline
            </p>
            <p className="mt-4 max-w-xl font-serif text-2xl text-foreground">
              Project summaries will be published here.
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  Asset
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The property, portfolio, or assignment.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  Market
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Where the work sits, and what the team is watching.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  Work
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Underwriting, research, or the recommendation delivered.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="border border-border bg-card p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {project.sector}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {project.status}
                  </p>
                </div>
                <h2 className="mt-5 font-serif text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
                  {project.title}
                </h2>
                {project.location && (
                  <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                )}
                {project.contact ? (
                  <a
                    href={project.contact}
                    className="mt-4 inline-flex text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                  >
                    {project.summary}
                  </a>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
