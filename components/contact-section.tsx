"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
            Visit Us Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.415481822367!2d78.0275309!3d15.8347457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e700306c9b4b%3A0xe5a70e84e7d4f161!2sAmay%20Bistro!5e0!3m2!1sen!2sin!4v1764743671273!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amay Bistro Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  lines: ["VR Colony", "Kurnool, Andhra Pradesh", "India"],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  lines: ["+91 98765 43210", "+91 87654 32109"],
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["hello@amaybistro.com", "reservations@amaybistro.com"],
                },
                {
                  icon: Clock,
                  title: "Hours",
                  lines: ["Mon - Sun", "12:00 PM - 10:30 PM"],
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                  {contact.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">@amaybistro • Share your experience with #AmayBistro</p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-primary rounded-2xl p-6 text-center"
            >
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">Ready to Visit?</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Walk-ins welcome or book a table for guaranteed seating
              </p>
              <a
                href="#reservation"
                className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Book a Table
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
