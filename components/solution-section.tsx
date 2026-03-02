import { BookOpen, Star, Gift, Heart } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The solution
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A loop that turns memorization into joy
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            NoorDash creates a virtuous cycle where your child{"'"}s effort is recognized,
            your involvement is built in, and real-world rewards seal the bond.
          </p>
        </div>

        {/* The NoorDash Loop */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Step cards */}
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Child memorizes</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  Your child picks a surah, listens to recitation, practices ayah by ayah, and builds towards completion at their own pace.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Noors are earned</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  Every completed surah earns in-app reward points called Noors — visible, motivating, and trackable on a beautiful dashboard.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Parent approves</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  Nothing unlocks until you hear them recite. You verify their progress — because the real reward is the connection between you.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                <Gift className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Rewards unlock</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  You set the real-world rewards — ice cream, a new book, a family outing. When they reach their Noor goal, the reward unlocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
