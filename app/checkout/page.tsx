'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useCart } from '@/lib/cart-context'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  cardName: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required'
    if (!formData.cardName.trim()) newErrors.cardName = 'Card holder name is required'
    if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits'
    }
    if (formData.expiryDate.trim().length !== 5) {
      newErrors.expiryDate = 'Expiry date format MM/YY required'
    }
    if (formData.cvv.length !== 3) newErrors.cvv = 'CVV must be 3 digits'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setOrderPlaced(true)
    clearCart()
    setIsProcessing(false)
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Your Cart is Empty</h1>
            <p className="text-foreground/70">Add items to your cart before checking out.</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
            >
              Back to Shop
            </Link>
          </div>
        </div>
        </main>
        <Footer />
      </>
    )
  }

  if (orderPlaced) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-card border border-border rounded-lg p-8 text-center space-y-6">
            <div className="text-6xl">🎉</div>
            <h1 className="text-3xl font-bold text-foreground">Order Placed Successfully!</h1>
            <p className="text-lg text-foreground/70">
              Thank you for your purchase. Your order has been confirmed.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2 text-left">
              <p className="font-semibold text-green-900">Order Confirmation</p>
              <p className="text-sm text-green-800">
                Order #VA{Math.floor(Math.random() * 1000000)
                  .toString()
                  .padStart(6, '0')}
              </p>
              <p className="text-sm text-green-800">
                A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-2 text-left">
              <p className="font-semibold text-foreground">Estimated Delivery</p>
              <p className="text-sm text-foreground/70">
                Your order will arrive within 5-7 business days
              </p>
              <p className="text-sm text-foreground/70">
                Shipping address: {formData.address}, {formData.city}, {formData.state}{' '}
                {formData.zipCode}
              </p>
            </div>

            <div className="space-y-3 pt-6">
              <Link
                href="/"
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center block"
              >
                Continue Shopping
              </Link>
              <p className="text-sm text-foreground/60">
                Questions? Contact our support team at support@valleyalley.com
              </p>
            </div>
          </div>
        </div>
        </main>
        <Footer />
      </>
    )
  }

  const shippingCost = cartTotal > 500000 ? 0 : 50000
  const total = cartTotal + shippingCost

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/cart"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8"
        >
          ← Back to Cart
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            <section className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Shipping Information</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.firstName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.lastName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="+62 8XX XXXX XXXX"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.address ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="123 Main Street"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.city ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Jakarta"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.state ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="DKI Jakarta"
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Zip Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.zipCode ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="12345"
                />
                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Payment Information</h2>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Card Holder Name *
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.cardName ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="John Doe"
                />
                {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Card Number *
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.cardNumber ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    maxLength={5}
                    placeholder="MM/YY"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.expiryDate ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    CVV *
                  </label>
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    maxLength={3}
                    placeholder="123"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.cvv ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
                This is a demo checkout. Your payment information is not actually processed.
              </div>
            </section>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : `Complete Purchase - Rp ${total.toLocaleString('id-ID')}`}
            </button>
          </form>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-20">
              <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.color}`}
                    className="flex justify-between text-sm text-foreground/70"
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.emoji}</span>
                      <span>{item.name}</span>
                      <span className="text-foreground/50">x{item.quantity}</span>
                    </div>
                    <span className="font-semibold text-foreground">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border space-y-3 pt-4">
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
              </div>

              <div className="flex justify-between text-xl font-bold text-foreground border-t border-border pt-4">
                <span>Total</span>
                <span className="text-primary">Rp {total.toLocaleString('id-ID')}</span>
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
