const steps = [
  {
    number: "01",
    title: "Set up your family",
    description:
      "Create your parent account and add your children. Choose starting surahs based on their level — from Al-Fatiha to longer surahs.",
  },
  {
    number: "02",
    title: "Your child memorizes at their pace",
    description:
      "They listen, repeat, and practice ayah by ayah with guided audio. The app tracks their progress and celebrates each milestone with Noors.",
  },
  {
    number: "03",
    title: "They recite to you",
    description:
      "When a surah is complete, your child recites it to you in person. This is the moment that matters — a shared spiritual connection.",
  },
  {
    number: "04",
    title: "You approve and reward",
    description:
      "Tap to approve in the app. Their Noor balance grows. When they hit a milestone, the real-world reward you set becomes available.",
  },
  {
    number: "05",
    title: "Watch them thrive",
    description:
      "Over time, a habit forms. Quran memorization stops being a chore and becomes something they genuinely look forward to.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Five steps to joyful memorization
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-8 md:block" aria-hidden="true" />

            <div className="flex flex-col gap-10">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6 md:gap-8">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary md:h-16 md:w-16 md:text-base">
                    {step.number}
                  </div>

                  <div className={`flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm ${index === steps.length - 1 ? '' : ''}`}>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
