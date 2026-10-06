type PageIntroProps = {
  eyebrow: string
  title: string
  lede: string
}

export function PageIntro({ eyebrow, title, lede }: PageIntroProps) {
  return (
    <div className="border-b border-border pb-10">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium tracking-tight text-foreground lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {lede}
      </p>
    </div>
  )
}
