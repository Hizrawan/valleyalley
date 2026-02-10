'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { PRODUCTS } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const productId = parseInt(id)
  const product = PRODUCTS.find((p) => p.id === productId)
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '#fd6c22')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Product Not Found</h1>
          <p className="text-foreground/60">The product you are looking for does not exist.</p>
          <Link href="/" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceDisplay: product.priceDisplay,
      quantity,
      color: selectedColor,
      emoji: product.emoji,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8"
        >
          ← Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
              <span className="text-9xl">{product.emoji}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-foreground/70">{product.description}</p>
            </div>

            <div className="space-y-4 py-6 border-y border-border">
              <p className="text-foreground/70">{product.fullDescription}</p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Premium quality materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Eco-friendly production
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Designed for daily movement
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-3">Choose Color:</p>
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-foreground scale-110'
                          : 'border-border hover:border-foreground/50'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3">Quantity:</p>
                <div className="flex items-center gap-4 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <span className="text-2xl font-semibold text-foreground w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-foreground/70">Price:</span>
                <span className="text-4xl font-bold text-primary">{product.priceDisplay}</span>
              </div>
              <p className="text-sm text-foreground/60">
                Total: Rp {(product.price * quantity).toLocaleString('id-ID')}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
              <Link
                href="/cart"
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors text-center"
              >
                View Cart
              </Link>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-foreground">
                Free shipping on orders over Rp 500K. Easy returns within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
