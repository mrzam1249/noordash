import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "My daughter now reminds me it's Quran time. That never happened before NoorDash.",
    name: "Parent testimonial",
    detail: "Placeholder — will be replaced with real feedback",
    initials: "PT",
  },
  {
    quote:
      "The approval step changed everything. It's not just an app — it's our time together.",
    name: "Parent testimonial",
    detail: "Placeholder — will be replaced with real feedback",
    initials: "PT",
  },
  {
    quote:
      "We've tried three other apps. This is the only one my son actually stuck with.",
    name: "Parent testimonial",
    detail: "Placeholder — will be replaced with real feedback",
    initials: "PT",
  },
]

export function SocialProofSection() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            From families like yours
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Families are sharing their stories
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            These are placeholder testimonials that will be replaced with real parent feedback as our community grows.
          </p>
        </div>

        {/* Metrics */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6 text-center">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-3xl font-bold text-primary">--</p>
            <p className="mt-1 text-sm text-muted-foreground">Families joined</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-3xl font-bold text-primary">--</p>
            <p className="mt-1 text-sm text-muted-foreground">Surahs memorized</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-3xl font-bold text-primary">--</p>
            <p className="mt-1 text-sm text-muted-foreground">Noors earned</p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm italic leading-relaxed text-foreground">
                {'"'}{t.quote}{'"'}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
