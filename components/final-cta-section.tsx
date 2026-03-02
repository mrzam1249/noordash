import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppleIcon, PlayStoreIcon } from "@/components/store-icons"

export function FinalCtaSection() {
  return (
    <section id="download" className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
            {/* Subtle decorative bg */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
              <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent" />
            </div>

            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Where Quran memorization becomes a shared achievement
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Your child wants rewards. You want them to love the Quran.
                NoorDash connects both. Start your family{"'"}s journey today.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg hover:bg-noor-teal-dark">
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <AppleIcon className="h-5 w-5" />
                    Download on iOS
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 gap-3 rounded-full border-border px-8 text-base font-semibold text-foreground hover:bg-secondary">
                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <PlayStoreIcon className="h-5 w-5" />
                    Get it on Android
                  </a>
                </Button>
              </div>

              {/* Privacy reassurance */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>We don{"'"}t sell your data. Designed for parents; we do not knowingly collect data from children without parental involvement.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
