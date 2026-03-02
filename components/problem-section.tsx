import { Smartphone, Clock, ShieldOff } from "lucide-react"

const problems = [
  {
    icon: Smartphone,
    title: "Endless distractions",
    description:
      "Screens pull their attention in every direction. YouTube, games, and social media compete with Quran time — and usually win.",
  },
  {
    icon: Clock,
    title: "Inconsistency creeps in",
    description:
      "You start strong. But without structure and motivation, memorization fades into an occasional, guilt-filled attempt.",
  },
  {
    icon: ShieldOff,
    title: "You feel alone in this",
    description:
      "Most apps are built for adults. Finding something that works for your child — and lets you stay involved — feels impossible.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The challenge
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Quran memorization shouldn{"'"}t feel like a battle
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Raising kids who love the Quran in the West comes with real obstacles.
            You{"'"}re not imagining it — and you{"'"}re not alone.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
