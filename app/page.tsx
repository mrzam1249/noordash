import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { RewardsSection } from "@/components/rewards-section"
import { ParentApprovalSection } from "@/components/parent-approval-section"
import { AppScreensSection } from "@/components/app-screens-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <RewardsSection />
      <ParentApprovalSection />
      <AppScreensSection />
      <SocialProofSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
