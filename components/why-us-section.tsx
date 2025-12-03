"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "The Butter Chicken Pizza is absolutely divine! Never thought this fusion would work so well. A must-try!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rahul Reddy",
    rating: 5,
    text: "Best Italian food in Kurnool, hands down. The pasta is perfectly al dente and the ambiance is wonderful.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Anjali Krishna",
    rating: 5,
    text: "My go-to place for family dinners. Kids love the pizzas and we love the peaceful atmosphere.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Vikram Rao",
    rating: 4,
    text: "Great variety of dishes. The Paneer Tikka Pizza is innovative and delicious. Service is excellent!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Meera Devi",
    rating: 5,
    text: "The tiramisu here is the best I've ever had! And the milkshakes are so creamy and fresh.",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Arjun Naidu",
    rating: 5,
    text: "Finally, authentic Italian taste in our city! The Margherita is pure perfection. Highly recommended!",
    date: "1 month ago",
  },
  {
    id: 7,
    name: "Lakshmi Prasad",
    rating: 5,
    text: "Amazing food and even better service. The staff is so friendly and the portion sizes are generous.",
    date: "3 weeks ago",
  },
  {
    id: 8,
    name: "Karthik Kumar",
    rating: 4,
    text: "Love the concept of Italian-Indian fusion. The Masala Pasta is a game changer!",
    date: "2 weeks ago",
  },
]

export function WhyUsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="why-us" className="py-20 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">What People Say</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
            Why Our Guests Love Us
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: "🍕",
              title: "Fresh Ingredients",
              description: "Daily sourced, premium quality ingredients",
            },
            {
              icon: "👨‍🍳",
              title: "Expert Chefs",
              description: "Trained in authentic Italian techniques",
            },
            {
              icon: "🌿",
              title: "Unique Fusion",
              description: "Italian classics with Indian soul",
            },
            {
              icon: "❤️",
              title: "Made with Love",
              description: "Every dish crafted with passion",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-secondary rounded-2xl p-6 text-center group hover:bg-primary/5 transition-colors duration-300"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            ref={scrollRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex gap-6 ${isPaused ? "" : "animate-marquee"}`}
              style={{
                width: "max-content",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {/* Double the reviews for seamless loop */}
              {[...reviews, ...reviews].map((review, index) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  whileHover={{ scale: 1.02 }}
                  className="w-[320px] sm:w-[380px] flex-shrink-0 bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-muted-foreground/30" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-2" />
                  <p className="text-foreground leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Hover over reviews to pause scrolling
        </motion.p>
      </div>
    </section>
  )
}
