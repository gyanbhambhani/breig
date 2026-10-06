import { PageIntro } from "@/components/page-intro"
import { marketNotes } from "@/lib/publishing"

export function Market() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageIntro
          eyebrow="Research"
          title="Market"
          lede="Short notes from our internal market work, written to stand on their own and to post on LinkedIn. This page is the archive of that analysis."
        />

        {marketNotes.length === 0 ? (
          <div className="border-b border-border py-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Latest note
            </p>
            <p className="mt-4 max-w-xl font-serif text-2xl text-foreground">
              Market notes will be posted here.
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  Date
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  When the note was written.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  Market
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The city, asset type, or theme under review.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  LinkedIn
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A link to the post once it is live.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {marketNotes.map((note) => (
              <article
                key={`${note.date}-${note.title}`}
                className="grid gap-4 border-b border-border py-10 md:grid-cols-[9rem_1fr] md:gap-12"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {note.date}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    {note.topic}
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
                    {note.title}
                  </h2>
                  {note.author && (
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {note.author}
                    </p>
                  )}
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground">
                    {note.summary}
                  </p>
                  {note.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {note.linkedin && (
                    <a
                      href={note.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                    >
                      View on LinkedIn
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
