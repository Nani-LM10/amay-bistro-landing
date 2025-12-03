"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "./cart-provider"
import { cn } from "@/lib/utils"

const leftLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Dine In", href: "#reservation" },
]

const rightLinks = [
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/50 py-3"
            : "bg-transparent py-5",
        )}
      >
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent pointer-events-none" />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8 flex-1">
              {leftLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors relative group",
                    isScrolled ? "text-foreground/80 hover:text-primary" : "text-foreground/90 hover:text-primary",
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Logo - Center */}
            <motion.a
              href="#home"
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Amay</h1>
                <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary font-medium -mt-1">
                  Bistro
                </p>
              </div>
            </motion.a>

            {/* Right Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {rightLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors relative group",
                    isScrolled ? "text-foreground/80 hover:text-primary" : "text-foreground/90 hover:text-primary",
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              {/* Cart Button */}
              <motion.button
                onClick={() => setIsOpen(true)}
                className={cn(
                  "relative p-2.5 rounded-full transition-all",
                  isScrolled
                    ? "bg-foreground/5 hover:bg-primary/10 text-foreground/80 hover:text-primary"
                    : "text-foreground/80 hover:text-primary",
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <motion.button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-foreground/80 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </motion.button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Added blur effect to mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {[...leftLinks, ...rightLinks].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
