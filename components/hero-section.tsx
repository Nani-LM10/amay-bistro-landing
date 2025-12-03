"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-24">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">Italian-Indian Fusion</span>
            <div className="h-px w-12 bg-primary" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6"
          >
            <span className="block">Authentic Italian,</span>
            <span className="block text-primary">Crafted with Love</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-lg leading-relaxed mb-8"
          >
            Experience the perfect blend of traditional Italian recipes and aromatic Indian spices at Amay Bistro,
            Kurnool's premier destination for wood-fired pizzas and handmade pasta.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-medium tracking-wide group"
            >
              <a href="#menu">
                View Menu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/20 hover:bg-foreground/5 h-14 px-8 text-base font-medium tracking-wide bg-transparent"
            >
              <a href="#reservation">Reserve Table</a>
            </Button>
          </motion.div>

          {/* Info Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-border/50"
          >
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="font-semibold text-foreground">4.9</span>
              <span className="text-muted-foreground">(500+ reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>VR Colony, Kurnool</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>11 AM - 11 PM</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Realistic Food Images with Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="order-1 lg:order-2 relative h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Decorative Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute w-[380px] h-[380px] sm:w-[450px] sm:h-[450px] lg:w-[520px] lg:h-[520px] border border-dashed border-primary/20 rounded-full"
          />

          {/* Main Pizza Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative z-10"
          >
            <motion.div whileHover={{ scale: 1.05, rotate: 3 }} transition={{ duration: 0.4 }} className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-90" />

              {/* Main Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-background">
                <img
                  src="/wood-fired-margherita-pizza-with-melted-mozzarella.jpg"
                  alt="Wood-fired Margherita Pizza"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Steam Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-3">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-10, -40],
                      opacity: [0, 0.7, 0],
                      scale: [0.8, 1.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                    className="w-3 h-6 bg-gradient-to-t from-transparent to-white/30 rounded-full blur-sm"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Pasta Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.8 },
              y: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
            }}
            whileHover={{ scale: 1.08, rotate: -2 }}
            className="absolute -right-4 sm:right-0 top-16 sm:top-20 z-20"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl border-2 border-background bg-background">
              <img src="/creamy-carbonara-pasta-with-parmesan-close-up.jpg" alt="Creamy Pasta" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
              Pasta
            </div>
          </motion.div>

          {/* Floating Dessert Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 1 },
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
            }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            className="absolute -left-4 sm:left-0 bottom-20 sm:bottom-24 z-20"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-background bg-background">
              <img src="/tiramisu-dessert-with-cocoa-powder-elegant-plating.jpg" alt="Tiramisu Dessert" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-foreground text-background text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
              Dessert
            </div>
          </motion.div>

          {/* Floating Ingredient - Basil */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              x: [0, 5, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-8 left-12 sm:left-20 w-12 h-12 sm:w-16 sm:h-16"
          >
            <img
              src="/fresh-basil-leaves-transparent-background.jpg"
              alt="Fresh Basil"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Floating Ingredient - Tomato */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -8, 0],
              x: [0, -5, 0],
            }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-12 right-8 sm:right-16 w-10 h-10 sm:w-14 sm:h-14"
          >
            <img
              src="/red-cherry-tomatoes-transparent-background.jpg"
              alt="Cherry Tomatoes"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Floating Ingredient - Cheese */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 15, 0],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/3 -right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12"
          >
            <img
              src="/mozzarella-cheese-piece-transparent-background.jpg"
              alt="Mozzarella"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
            className="absolute -bottom-2 sm:bottom-4 right-1/4 bg-background border border-border rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
          >
            <span className="text-2xl">🔥</span>
            <span className="text-sm font-medium text-foreground">Wood Fired</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
