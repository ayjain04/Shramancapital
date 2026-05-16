import { Navbar } from "@/components/navbar"
import { FundsSection } from "@/components/funds-section"
import { PartnersSection } from "@/components/partners-section"
import { AboutFooter } from "@/components/about-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FundsSection />
      <PartnersSection />
      <AboutFooter />
    </main>
  )
}
