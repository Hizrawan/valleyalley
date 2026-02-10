'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  priceDisplay: string
  quantity: number
  color: string
  emoji: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number, color: string) => void
  updateQuantity: (id: number, color: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === newItem.id && item.color === newItem.color
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id && item.color === newItem.color
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }

      return [...prevItems, newItem]
    })
  }

  const removeItem = (id: number, color: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.color === color))
    )
  }

  const updateQuantity = (id: number, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, color)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    // Return a default context if not wrapped in provider
    return {
      items: [],
      addItem: () => {},
      removeItem: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      cartTotal: 0,
      cartCount: 0,
    }
  }
  return context
}
