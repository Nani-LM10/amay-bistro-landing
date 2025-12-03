"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { useCart } from "./cart-provider"
import { cn } from "@/lib/utils"

const categories = [
  { id: "pizzas", name: "Pizzas", count: 6 },
  { id: "pastas", name: "Pastas", count: 7 },
  { id: "burgers", name: "Burgers & Sandwiches", count: 9 },
  { id: "snacks", name: "Snacks", count: 10 },
  { id: "drinks", name: "Drinks", count: 15 },
  { id: "salads", name: "Salads", count: 2 },
  { id: "desserts", name: "Desserts", count: 12 },
]

const menuItems: Record<
  string,
  Array<{ id: string; name: string; description: string; price: number; image: string; isVeg: boolean }>
> = {
  pizzas: [
    {
      id: "p1",
      name: "Margherita Classica",
      description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
      price: 349,
      image: "/margherita-pizza-fresh-basil-mozzarella-wood-fired.jpg",
      isVeg: true,
    },
    {
      id: "p2",
      name: "Paneer Tikka Pizza",
      description: "Tandoori spiced paneer, bell peppers, onions, mint chutney drizzle",
      price: 429,
      image: "/paneer-tikka-pizza-indian-fusion-colorful-toppings.jpg",
      isVeg: true,
    },
    {
      id: "p3",
      name: "Pepperoni Inferno",
      description: "Spicy pepperoni, jalapeños, mozzarella, chili oil",
      price: 479,
      image: "/pepperoni-pizza-spicy-red-chili-flakes-melted-chee.jpg",
      isVeg: false,
    },
    {
      id: "p4",
      name: "Butter Chicken Pizza",
      description: "Creamy butter chicken, mozzarella, fresh coriander",
      price: 499,
      image: "/butter-chicken-pizza-creamy-orange-indian-fusion.jpg",
      isVeg: false,
    },
    {
      id: "p5",
      name: "Garden Fresh",
      description: "Seasonal vegetables, sun-dried tomatoes, feta, pesto",
      price: 399,
      image: "/vegetable-pizza-fresh-garden-colorful-toppings.jpg",
      isVeg: true,
    },
    {
      id: "p6",
      name: "Chicken Keema Special",
      description: "Spiced minced chicken, onions, green chilies, cheese blend",
      price: 469,
      image: "/keema-pizza-minced-meat-indian-spices.jpg",
      isVeg: false,
    },
  ],
  pastas: [
    {
      id: "pa1",
      name: "Spaghetti Carbonara",
      description: "Creamy egg sauce, pancetta, parmesan, black pepper",
      price: 389,
      image: "/spaghetti-carbonara-creamy-pasta-bacon-parmesan.jpg",
      isVeg: false,
    },
    {
      id: "pa2",
      name: "Penne Arrabbiata",
      description: "Spicy tomato sauce, garlic, red chili flakes, fresh basil",
      price: 329,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "pa3",
      name: "Masala Pasta",
      description: "Indian spiced cream sauce, vegetables, aromatic herbs",
      price: 349,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "pa4",
      name: "Chicken Alfredo",
      description: "Grilled chicken, creamy alfredo sauce, parmesan",
      price: 429,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "pa5",
      name: "Pesto Fusilli",
      description: "Fresh basil pesto, pine nuts, cherry tomatoes, parmesan",
      price: 369,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "pa6",
      name: "Seafood Marinara",
      description: "Prawns, calamari, mussels in spiced tomato sauce",
      price: 549,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "pa7",
      name: "Aglio Olio",
      description: "Garlic, olive oil, chili flakes, parsley, spaghetti",
      price: 299,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
  ],
  burgers: [
    {
      id: "b1",
      name: "Classic Cheese Burger",
      description: "Beef patty, cheddar, lettuce, tomato, special sauce",
      price: 299,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "b2",
      name: "Paneer Tikka Burger",
      description: "Grilled paneer, tandoori mayo, onion rings, lettuce",
      price: 249,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "b3",
      name: "Chicken Zinger",
      description: "Crispy fried chicken, spicy mayo, coleslaw, pickles",
      price: 329,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "b4",
      name: "Aloo Tikki Burger",
      description: "Spiced potato patty, mint chutney, onions, tomatoes",
      price: 199,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "b5",
      name: "BBQ Chicken Sandwich",
      description: "Pulled chicken, BBQ sauce, coleslaw, brioche bun",
      price: 349,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "b6",
      name: "Grilled Veggie Sandwich",
      description: "Grilled vegetables, pesto, mozzarella, ciabatta",
      price: 279,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "b7",
      name: "Fish Burger",
      description: "Crispy fish fillet, tartar sauce, lettuce, lemon",
      price: 369,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "b8",
      name: "Mushroom Swiss Burger",
      description: "Beef patty, sautéed mushrooms, Swiss cheese",
      price: 379,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "b9",
      name: "Club Sandwich",
      description: "Triple decker, chicken, bacon, egg, vegetables",
      price: 329,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
  ],
  snacks: [
    {
      id: "s1",
      name: "Garlic Bread",
      description: "Toasted bread with garlic butter and herbs",
      price: 149,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s2",
      name: "Cheesy Fries",
      description: "Crispy fries topped with melted cheese and herbs",
      price: 179,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s3",
      name: "Chicken Wings",
      description: "Crispy wings with choice of sauce - BBQ, Buffalo, or Honey Garlic",
      price: 299,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "s4",
      name: "Bruschetta",
      description: "Toasted bread with tomatoes, basil, garlic, olive oil",
      price: 199,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s5",
      name: "Paneer Pakora",
      description: "Crispy fried paneer fritters with mint chutney",
      price: 229,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s6",
      name: "Onion Rings",
      description: "Crispy battered onion rings with dipping sauce",
      price: 169,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s7",
      name: "Nachos Supreme",
      description: "Tortilla chips with cheese, jalapeños, salsa, sour cream",
      price: 249,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s8",
      name: "Spring Rolls",
      description: "Crispy vegetable spring rolls with sweet chili sauce",
      price: 189,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "s9",
      name: "Chicken Nuggets",
      description: "Crispy chicken nuggets with honey mustard dip",
      price: 229,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: false,
    },
    {
      id: "s10",
      name: "Mozzarella Sticks",
      description: "Breaded mozzarella with marinara sauce",
      price: 259,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
  ],
  drinks: [
    {
      id: "d1",
      name: "Fresh Lime Soda",
      description: "Refreshing lime with soda, sweet or salted",
      price: 79,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d2",
      name: "Mango Lassi",
      description: "Creamy yogurt drink with fresh mangoes",
      price: 129,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d3",
      name: "Chocolate Shake",
      description: "Rich chocolate milkshake with whipped cream",
      price: 169,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d4",
      name: "Strawberry Shake",
      description: "Fresh strawberry milkshake with real fruit",
      price: 169,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d5",
      name: "Oreo Shake",
      description: "Cookies and cream milkshake with Oreo crumbs",
      price: 179,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d6",
      name: "Cold Coffee",
      description: "Chilled coffee with ice cream and chocolate",
      price: 149,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d7",
      name: "Masala Chai",
      description: "Traditional Indian spiced tea",
      price: 49,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d8",
      name: "Espresso",
      description: "Strong Italian espresso shot",
      price: 99,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d9",
      name: "Cappuccino",
      description: "Espresso with steamed milk foam",
      price: 149,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d10",
      name: "Virgin Mojito",
      description: "Mint, lime, sugar, soda - refreshing mocktail",
      price: 129,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d11",
      name: "Blue Lagoon",
      description: "Blue curacao mocktail with lime and soda",
      price: 149,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d12",
      name: "Vanilla Shake",
      description: "Classic vanilla milkshake with ice cream",
      price: 159,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d13",
      name: "Butterscotch Shake",
      description: "Creamy butterscotch milkshake",
      price: 169,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d14",
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice",
      price: 119,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "d15",
      name: "Iced Tea",
      description: "Chilled lemon iced tea",
      price: 99,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
  ],
  salads: [
    {
      id: "sa1",
      name: "Caesar Salad",
      description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
      price: 249,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "sa2",
      name: "Greek Salad",
      description: "Cucumber, tomatoes, olives, feta cheese, olive oil",
      price: 269,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
  ],
  desserts: [
    {
      id: "de1",
      name: "Tiramisu",
      description: "Classic Italian coffee-flavored dessert",
      price: 249,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de2",
      name: "Chocolate Brownie",
      description: "Warm brownie with vanilla ice cream",
      price: 199,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de3",
      name: "Gulab Jamun",
      description: "Traditional Indian sweet dumplings in sugar syrup",
      price: 149,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de4",
      name: "Panna Cotta",
      description: "Italian cream dessert with berry compote",
      price: 229,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de5",
      name: "Cheesecake",
      description: "New York style cheesecake with strawberry sauce",
      price: 269,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de6",
      name: "Rasmalai",
      description: "Soft paneer dumplings in sweetened milk",
      price: 169,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de7",
      name: "Gelato",
      description: "Italian ice cream - choice of flavors",
      price: 179,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de8",
      name: "Chocolate Lava Cake",
      description: "Warm cake with molten chocolate center",
      price: 249,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de9",
      name: "Apple Pie",
      description: "Warm apple pie with vanilla ice cream",
      price: 219,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de10",
      name: "Kheer",
      description: "Creamy Indian rice pudding with nuts",
      price: 149,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de11",
      name: "Affogato",
      description: "Vanilla gelato drowned in espresso",
      price: 199,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
    {
      id: "de12",
      name: "Nutella Crepe",
      description: "Thin crepe filled with Nutella and bananas",
      price: 229,
      image: "/placeholder.svg?height=400&width=400",
      isVeg: true,
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("pizzas")
  const { addItem } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const handleAddItem = (item: (typeof menuItems.pizzas)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      category: activeCategory,
      image: item.image,
    })
    setAddedItems((prev) => new Set(prev).add(item.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
    }, 1000)
  }

  return (
    <section id="menu" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Selection</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
            Explore Our Menu
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From authentic Italian classics to unique Indian-fusion creations, discover dishes crafted with passion and
            premium ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10",
              )}
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems[activeCategory]?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full",
                        item.isVeg ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
                      )}
                    >
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                    <p className="font-serif text-xl font-bold text-primary">₹{item.price}</p>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={() => handleAddItem(item)}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "mt-4 w-full py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2",
                      addedItems.has(item.id)
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          ✓
                        </motion.span>
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
