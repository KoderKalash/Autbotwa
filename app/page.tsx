import { HeroSection } from "@/components/Hero"
import { StatsFeaturesSection } from "@/components/stats-feature-section"
import { FeaturesListSection } from "@/components/Features"
import { TestimonialsSection } from "@/components/Testimonials"
import { PricingSection } from "@/components/Pricing"
import { FaqCtaSection } from "@/components/FAQ"
import { FooterSection } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsFeaturesSection />
      <FeaturesListSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqCtaSection/>
      <FooterSection/>
    </main>
  )
}
