"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/italian-chef-preparing-pizza-dough-in-restaurant-k.jpg"
                  alt="Chef preparing pizza"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/fresh-italian-cooking-ingredients-tomatoes-basil-g.jpg"
                  alt="Fresh ingredients"
                  className="w-full h-36 sm:h-48 object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/traditional-wood-fired-pizza-oven-with-flames-insi.jpg"
                  alt="Wood fired oven"
                  className="w-full h-36 sm:h-48 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img src="/elegant-plated-pasta-dish-with-fresh-herbs-restaur.jpg" alt="Plated pasta" className="w-full h-48 sm:h-64 object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              A Passion Born in Two Worlds
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Amay Bistro was born from a simple dream — to bring the soul of Italian cuisine to the heart of Kurnool
                while celebrating the rich flavors of India. Established in 2024, we set out to create a space where
                culinary traditions meet and magic happens.
              </p>
              <p>
                Our chefs blend time-honored Italian techniques with bold Indian spices, creating dishes that surprise
                and delight. From our signature Butter Chicken Pizza to classic Margherita, every dish is crafted with
                love, premium ingredients, and an unwavering commitment to quality.
              </p>
              <p>
                At Amay Bistro, you're not just having a meal — you're experiencing a fusion of cultures, one delicious
                bite at a time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "60+", label: "Menu Items" },
                { number: "2024", label: "Established" },
                { number: "100%", label: "Fresh Daily" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
