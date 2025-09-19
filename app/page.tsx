import { HeroSection } from "@/components/hero-section"
import { MassSchedule } from "@/components/mass-schedule"
import { LatestNews } from "@/components/latest-news"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MassSchedule />
      <LatestNews />
      <CTASection />
    </main>
  )
}
