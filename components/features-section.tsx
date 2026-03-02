import {
  BookOpen,
  Headphones,
  BarChart3,
  Shield,
  Users,
  Bell,
  Globe,
  Sparkles,
  Heart,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Structured surah curriculum",
    description:
      "Surahs are organized by difficulty. Start with Juz Amma and grow into longer chapters with guided progression.",
  },
  {
    icon: Headphones,
    title: "Professional audio recitation",
    description:
      "High-quality recitations from renowned Qaris help your child learn proper tajweed and pronunciation.",
  },
  {
    icon: BarChart3,
    title: "Progress dashboard",
    description:
      "Visual progress tracking for both parent and child. See surahs completed, Noors earned, and streaks maintained.",
  },
  {
    icon: Shield,
    title: "Parent-controlled experience",
    description:
      "You decide which surahs to assign, what rewards to offer, and when to approve. Full control stays with you.",
  },
  {
    icon: Users,
    title: "Multiple child profiles",
    description:
      "Add all your children under one parent account. Each child has their own progress, Noors, and reward goals.",
  },
  {
    icon: Bell,
    title: "Gentle daily reminders",
    description:
      "Customizable notification timing so your child builds a consistent memorization habit without nagging.",
  },
  {
    icon: Globe,
    title: "Works offline",
    description:
      "Downloaded surahs are available without internet. Perfect for travel, waiting rooms, or anywhere without WiFi.",
  },
  {
    icon: Sparkles,
    title: "Celebration milestones",
    description:
      "Beautiful animations and encouragement when surahs are completed. Every achievement feels special.",
  },
  {
    icon: Heart,
    title: "Built with Islamic values",
    description:
      "Respectful, distraction-free design. No ads, no social features, no content that pulls your child away from Quran.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything your family needs
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Carefully designed tools that support your child{"'"}s memorization journey and keep you involved.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
