import { Navbar } from "@/components/navbar"
import { Hero3DStage } from "@/components/hero-3d-stage"
import { LogoCloud } from "@/components/logo-cloud"
import { FeatureCardsSection } from "@/components/feature-cards-section"
import { WorkflowsSection } from "@/components/workflows-section"
import { AISection } from "@/components/ai-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#09090B]">
      <Navbar />
      <Hero3DStage />
      <LogoCloud />
      <section id="features">
        <FeatureCardsSection />
      </section>
      <section id="ai">
        <AISection />
      </section>
      <section id="workflows">
        <WorkflowsSection />
      </section>
      <section id="how-it-works">
        <CTASection />
      </section>
      <Footer />
    </main>
  )
}
