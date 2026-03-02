import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    label: "Child completes",
    description: "Your child finishes memorizing a surah in the app and taps \"Ready to recite.\"",
  },
  {
    label: "They recite to you",
    description: "Sit together. Listen. This is the moment that bonds your family around the Quran.",
  },
  {
    label: "You approve",
    description: "Satisfied with their recitation? Tap approve. The Noors are added to their balance instantly.",
  },
]

export function ParentApprovalSection() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Parent verification
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Nothing counts without you
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              NoorDash is built on a simple principle: the parent is always in the loop.
              Your child can{"'"}t earn Noors by gaming the system. Every surah requires your personal approval.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {steps.map((step, index) => (
                <div key={step.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - conceptual app screen */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-8 shadow-lg">
              <div className="mb-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">Surah Al-Fatiha</h3>
                <p className="mt-1 text-sm text-muted-foreground">Awaiting your approval</p>
              </div>

              <div className="flex flex-col gap-3 rounded-xl bg-secondary p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Ayahs memorized</span>
                  <span className="font-semibold text-foreground">7 / 7</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Practice sessions</span>
                  <span className="font-semibold text-foreground">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Noors to earn</span>
                  <span className="font-semibold text-accent">+50</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-xl border border-border bg-background py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary" type="button">
                  Not yet
                </button>
                <button className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-noor-teal-dark" type="button">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
