import Image from "next/image"
import { Star, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppleIcon, PlayStoreIcon } from "@/components/store-icons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <Star className="h-4 w-4 text-accent" />
            <span>Quran memorization, reimagined for families</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
            Make Quran memorization something they{" "}
            <span className="text-primary">ask for</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            NoorDash turns memorization into a joyful, structured journey.
            Kids earn rewards as they memorize. Parents stay connected every step of the way.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg hover:bg-noor-teal-dark">
              <a href="#download">
                <AppleIcon className="h-5 w-5" />
                Download on iOS
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 gap-3 rounded-full border-border px-8 text-base font-semibold text-foreground hover:bg-secondary">
              <a href="#download">
                <PlayStoreIcon className="h-5 w-5" />
                Get it on Android
              </a>
            </Button>
          </div>

          {/* Hero image */}
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/5">
              <Image
                src="/images/hero-app-preview.jpg"
                alt="NoorDash app preview showing the Quran memorization dashboard for children"
                width={1200}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* Trust markers */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:gap-10">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Privacy-first design</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Built for ages 5-12</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent" />
              <span>Free to get started</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
