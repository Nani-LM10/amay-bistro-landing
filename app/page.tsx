import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { AboutSection } from "@/components/about-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ReservationSection } from "@/components/reservation-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <WhyUsSection />
        <ReservationSection />
        <ContactSection />
        <Footer />
        <CartDrawer />
      </main>
    </CartProvider>
  )
}
