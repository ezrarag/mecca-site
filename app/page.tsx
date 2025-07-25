import Hero from "@/components/hero"
import Programs from "@/components/programs"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-200">
      <Hero />
      <Programs />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  )
}
