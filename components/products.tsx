'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS as ProductList } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

const categories = ['T-Shirt', 'Jacket', 'Shorts', 'Hat', 'Bag']
const filteredProducts = (selectedCategory: string | null) => {
  if (selectedCategory) {
    return ProductList.filter((p) => p.category === selectedCategory)
  }
  return ProductList
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section id="products" className="w-full bg-background py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Collection
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Carefully crafted pieces for urban outdoor living. Playful, functional, and affordable.
          </p>
        </div>

        <div className="flex gap-2 justify-center mb-12 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts(selectedCategory).map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all bg-card hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform">
                  {product.emoji}
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-3">
                <div>
                  <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-foreground/70">{product.description}</p>

                <div className="flex gap-2 pt-2">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-border"
                      style={{ backgroundColor: color }}
                      title={`Color ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg sm:text-xl font-bold text-primary">
                    {product.priceDisplay}
                  </span>
                  <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/90 transition-colors">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
