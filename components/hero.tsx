export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SFW%20Compressed-HXR5BvV1hYd3n6yBDnEpDtogENveJj.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 pt-40 md:pt-48 text-center lg:px-8">
        <div className="space-y-4">
          <p className="text-2xl md:text-3xl font-semibold text-accent tracking-wide">UC BERKELEY'S</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground/90 tracking-tight">
            Real Estate Investment Group
          </h1>
        </div>
        {/* </CHANGE> */}
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
          Building the next generation of real estate leaders through community-driven education, networking, and
          hands-on experience in residential and commercial investment.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
