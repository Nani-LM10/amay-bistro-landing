"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
]

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8]

export function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 2000)
  }

  return (
    <section id="reservation" className="py-20 sm:py-32 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=800')`,
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-background"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Reserve Your Table</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
              Dine In With Us
            </h2>
            <p className="mt-6 text-background/70 text-lg leading-relaxed">
              Reserve your table and experience the perfect blend of Italian elegance and Indian warmth. Whether it's a
              romantic dinner, family celebration, or casual gathering, we've got the perfect spot for you.
            </p>

            {/* Info Cards */}
            <div className="mt-10 space-y-4">
              {[
                {
                  icon: Clock,
                  title: "Opening Hours",
                  text: "Mon-Sun: 12:00 PM - 10:30 PM",
                },
                {
                  icon: Users,
                  title: "Seating Capacity",
                  text: "Up to 8 guests per reservation",
                },
                {
                  icon: Calendar,
                  title: "Advance Booking",
                  text: "Book up to 30 days in advance",
                },
              ].map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-background">{info.title}</p>
                    <p className="text-sm text-background/60">{info.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background rounded-3xl p-8 sm:p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Reservation Confirmed!</h3>
                <p className="text-muted-foreground">We'll send you a confirmation shortly. See you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-6 sm:p-10 shadow-2xl">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Book Your Table</h3>

                <div className="space-y-5">
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-secondary border-0"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-secondary border-0"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-0"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Date</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-secondary border-0"
                    />
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Preferred Time</label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: slot })}
                          className={cn(
                            "px-3 py-2 text-sm rounded-lg transition-all duration-200",
                            formData.time === slot
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-primary/10",
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Number of Guests</label>
                    <div className="flex flex-wrap gap-2">
                      {guestOptions.map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: num })}
                          className={cn(
                            "w-10 h-10 rounded-full text-sm font-medium transition-all duration-200",
                            formData.guests === num
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground hover:bg-primary/10",
                          )}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      placeholder="Any dietary requirements or special occasions?"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialRequests: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-4 py-3 bg-secondary rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.time}
                    className="w-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                    ) : (
                      "Confirm Reservation"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
