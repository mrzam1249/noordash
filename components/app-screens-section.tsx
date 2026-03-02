import { BookOpen, Star, Gift, BarChart3, Bell } from "lucide-react"

const screens = [
  {
    icon: BookOpen,
    title: "Memorization View",
    description:
      "A clean, focused screen showing the current surah with ayah-by-ayah progression. Audio playback, repeat controls, and progress indicators guide the child through each verse.",
    accent: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Star,
    title: "Noor Dashboard",
    description:
      "A beautiful overview showing the child's total Noor balance, recently completed surahs, active streaks, and how close they are to their next reward milestone.",
    accent: "bg-accent/15",
    iconColor: "text-accent",
  },
  {
    icon: Gift,
    title: "Rewards Gallery",
    description:
      "Visual cards showing available rewards set by the parent, the Noor cost for each, and progress bars showing how close the child is to unlocking them.",
    accent: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Parent Dashboard",
    description:
      "A summary view for parents showing each child's progress, pending approvals, recent activity, and overall memorization statistics across all children.",
    accent: "bg-accent/15",
    iconColor: "text-accent",
  },
  {
    icon: Bell,
    title: "Approval Queue",
    description:
      "A simple list of surahs waiting for parent verification. One tap to approve or request another attempt — keeping the process quick and encouraging.",
    accent: "bg-primary/10",
    iconColor: "text-primary",
  },
]

export function AppScreensSection() {
  return (
    <section className="bg-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Inside the app
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Designed for focus, built for families
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every screen in NoorDash is intentional — no clutter, no distractions, just the tools
            your child needs to succeed and the visibility you need to stay involved.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              {/* Mock screen header */}
              <div className="flex items-center gap-2 pb-4">
                <div className="h-2 w-2 rounded-full bg-border" />
                <div className="h-2 w-2 rounded-full bg-border" />
                <div className="h-2 w-2 rounded-full bg-border" />
              </div>

              {/* Screen icon area */}
              <div className={`flex h-32 w-full items-center justify-center rounded-xl ${screen.accent}`}>
                <screen.icon className={`h-12 w-12 ${screen.iconColor}`} />
              </div>

              <h3 className="mt-5 text-base font-semibold text-foreground">
                {screen.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {screen.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
