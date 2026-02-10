'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, LogOut } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useAuth } from '@/lib/auth-context'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">
              VA
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">Valleyalley</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#story" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cart"
              className="relative inline-flex p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center z-10">
                  {cartCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="px-3 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  {user?.name || user?.email}
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-border">
                      <p className="text-sm font-medium text-foreground">{user?.name}</p>
                      <p className="text-xs text-foreground/60">{user?.email}</p>
                    </div>
                    <Link
                      href="/account"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setUserMenuOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 pb-4 md:hidden border-t border-border pt-4">
            <a href="#products" className="text-sm text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#story" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart size={16} />
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  href="/account"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  My Account
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm text-primary font-medium hover:text-primary/80"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  Create Account
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
