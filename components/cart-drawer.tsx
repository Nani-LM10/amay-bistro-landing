"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "./cart-provider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, clearCart, total, itemCount } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
      setOrderPlaced(true)
      setTimeout(() => {
        clearCart()
        setOrderPlaced(false)
        setIsOpen(false)
      }, 3000)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-background z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl font-semibold">Your Order</h2>
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  {itemCount} items
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {orderPlaced ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                  >
                    <span className="text-4xl">✓</span>
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Order Placed!</h3>
                  <p className="text-muted-foreground">
                    Your order is being prepared. Please collect from our restaurant.
                  </p>
                </motion.div>
              ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground text-sm">Add some delicious items from our menu</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 bg-secondary/50 rounded-xl p-4"
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-primary font-semibold mt-1">₹{item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && !orderPlaced && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-serif text-2xl font-bold text-foreground">₹{total}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Takeaway only • Pay at restaurant</p>
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                >
                  {isCheckingOut ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                  ) : (
                    "Place Order for Takeaway"
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
