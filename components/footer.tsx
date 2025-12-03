"use client"

import { motion } from "framer-motion"

const footerLinks = {
  menu: [
    { name: "Pizzas", href: "#menu" },
    { name: "Pastas", href: "#menu" },
    { name: "Burgers", href: "#menu" },
    { name: "Desserts", href: "#menu" },
  ],
  info: [
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
    { name: "Dine In", href: "#reservation" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-4">
              <h2 className="font-serif text-3xl font-bold">Amay</h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Bistro</p>
            </div>
            <p className="text-background/60 max-w-md leading-relaxed">
              Where Italy meets India. Experience authentic Italian flavors crafted with an Indian soul, right here in
              Kurnool since 2024.
            </p>
            <p className="mt-6 text-sm text-background/40">VR Colony, Kurnool, Andhra Pradesh, India</p>
          </motion.div>

          {/* Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-background mb-4">Our Menu</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-background mb-4">Information</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/60 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-background/40">© 2025 Amay Bistro. All rights reserved.</p>
          <p className="text-sm text-background/40">Crafted with ❤️ in Kurnool</p>
        </motion.div>
      </div>
    </footer>
  )
}
