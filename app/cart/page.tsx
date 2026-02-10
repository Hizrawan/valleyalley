'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useCart } from '@/lib/cart-context'

export default function CartPage() {
  const { items, removeItem, updateQuantity, cartTotal, clearCart } = useCart()

  const shippingCost = cartTotal > 500000 ? 0 : 50000
  const total = cartTotal + shippingCost

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="text-6xl">🛒</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Your Cart is Empty</h1>
            <p className="text-lg text-foreground/70">Start shopping to add items to your cart.</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        </main>
        <Footer />
      </>
    )
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
          ← Continue Shopping
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.color}`}
                className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-5xl">{item.emoji}</span>
                </div>

                <div className="flex-grow space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/60">Color:</span>
                    <div
                      className="w-6 h-6 rounded-full border-2 border-border"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <p className="text-primary font-semibold">{item.priceDisplay}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id, item.color)}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    Remove
                  </button>

                  <div className="flex items-center gap-2 border border-border rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.color, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 font-semibold text-foreground">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                      className="px-2 py-1 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-right font-semibold text-foreground">
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4 sticky top-20">
              <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

              <div className="space-y-3 py-4 border-y border-border">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shippingCost === 0 ? 'FREE' : `Rp ${shippingCost.toLocaleString('id-ID')}`}
                  </span>
                </div>
                {shippingCost === 0 && (
                  <p className="text-xs text-green-600">Free shipping for orders over Rp 500K</p>
                )}
              </div>

              <div className="flex justify-between text-xl font-bold text-foreground">
                <span>Total</span>
                <span className="text-primary">Rp {total.toLocaleString('id-ID')}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center block"
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={clearCart}
                className="w-full py-2 px-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Clear Cart
              </button>

              <div className="p-3 bg-accent/10 rounded border border-accent/20 text-sm text-foreground/70 space-y-2">
                <p className="font-semibold text-foreground">Why choose Valleyalley?</p>
                <ul className="space-y-1">
                  <li>• Eco-friendly materials</li>
                  <li>• Fast & secure checkout</li>
                  <li>• 30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
