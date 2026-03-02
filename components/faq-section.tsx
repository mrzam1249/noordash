"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Isn't rewarding kids for Quran basically bribery?",
    answer:
      "Not at all. Behavioral science — and Islamic tradition — both support the idea that positive reinforcement builds habits. The Prophet (peace be upon him) encouraged rewarding children. NoorDash uses rewards to start a habit; over time, the intrinsic love of Quran takes over. The real-world reward is simply a bridge to get there.",
  },
  {
    question: "How does the parent approval process work?",
    answer:
      "When your child completes memorizing a surah in the app, they tap \"Ready to recite.\" You then sit together and listen to their recitation. If you're satisfied, you tap \"Approve\" in the app. Only after your approval are Noors credited to their account. Nothing is automated — you're always in control.",
  },
  {
    question: "What ages is NoorDash designed for?",
    answer:
      "NoorDash is designed for children aged 5 to 12. The interface is simple enough for young children to navigate independently, while the curriculum is structured enough for older kids who are working on longer surahs. The parent dashboard gives you full visibility regardless of your child's age.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes. Once surahs and audio are downloaded, your child can practice entirely offline. Progress syncs automatically when the device reconnects to the internet. This makes NoorDash perfect for car rides, travel, or locations without reliable WiFi.",
  },
  {
    question: "How is my family's privacy protected?",
    answer:
      "We take privacy seriously. NoorDash does not sell, share, or monetize your data. We do not knowingly collect personal data from children without parental involvement. All accounts are managed through the parent. We comply with applicable children's privacy regulations, and our full privacy policy is linked in the footer.",
  },
  {
    question: "Can I add multiple children?",
    answer:
      "Absolutely. One parent account can manage multiple child profiles. Each child has their own surah progress, Noor balance, and reward milestones. You can set different rewards and goals for each child based on their age and level.",
  },
  {
    question: "Can schools or institutions use NoorDash?",
    answer:
      "We're actively exploring institutional features for Islamic schools, weekend programs, and Quran teachers. If you represent an organization interested in using NoorDash, please reach out to us — we'd love to hear from you.",
  },
  {
    question: "Is NoorDash free?",
    answer:
      "NoorDash is free to get started. We want every family to be able to access the core memorization experience. Premium features may be introduced in the future, but the fundamental memorization and reward system will always be accessible.",
  },
  {
    question: "What Quran recitations are included?",
    answer:
      "We include high-quality recitations from well-known Qaris with proper tajweed. Audio is ayah-by-ayah, so children can listen, repeat, and practice at their own pace. We're continuously expanding our library of reciters.",
  },
  {
    question: "How is NoorDash different from other Quran apps?",
    answer:
      "Most Quran apps are built for adults. NoorDash is specifically designed for children and their parents. The two-part reward system (in-app Noors + parent-set real-world rewards), combined with mandatory parent approval, creates accountability and connection that no other app offers.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Common questions, clear answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
