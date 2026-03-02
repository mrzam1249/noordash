import { Star, Gift, TrendingUp } from "lucide-react"

export function RewardsSection() {
  return (
    <section id="rewards" className="bg-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Reward system
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Two rewards. One beautiful system.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Your child wants rewards. You want them to love the Quran.
            NoorDash connects both — through Noors and real-world rewards you control.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          {/* In-app Noors */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
              <Star className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              In-app Noors
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Noors are the in-app currency your child earns with every completed surah.
              They{"'"}re visible, countable, and deeply motivating.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Earn Noors for each memorized surah",
                "See a growing Noor balance on their dashboard",
                "Longer surahs earn more Noors",
                "Streak bonuses for daily consistency",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Real-world rewards */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Gift className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              Real-world rewards
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              You set physical rewards your child can work toward.
              When they reach a Noor milestone, the reward unlocks — on your terms.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "You choose the rewards (ice cream, toy, outing)",
                "Set the Noor goal needed to unlock each one",
                "Multiple rewards at different milestones",
                "Change or add rewards anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
