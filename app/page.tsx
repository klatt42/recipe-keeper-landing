import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import LeadMagnet from '@/components/LeadMagnet'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <Features />
      <Testimonials />
      <Pricing />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </main>
  )
}
