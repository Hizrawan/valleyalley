'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useAuth } from '@/lib/auth-context'
import { ChevronLeft } from 'lucide-react'

export default function AccountPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Not Authenticated</h1>
            <p className="text-foreground/60">Please sign in to view your account</p>
            <Link
              href="/login"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">My Account</h1>
            <p className="text-foreground/60">Manage your profile and account settings</p>
          </div>

          {/* Account Information Card */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-6">
            {/* Profile Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Profile Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/90 transition-colors"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-foreground/60">Full Name</p>
                    <p className="text-lg font-medium text-foreground">{name}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground/60">Email Address</p>
                    <p className="text-lg font-medium text-foreground">{email}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border"></div>

            {/* Account Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Account Settings</h3>

              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <p className="font-medium text-foreground">Change Password</p>
                  <p className="text-sm text-foreground/60">Update your password</p>
                </button>

                <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <p className="font-medium text-foreground">Notification Settings</p>
                  <p className="text-sm text-foreground/60">Manage email preferences</p>
                </button>

                <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <p className="font-medium text-foreground">Shipping Addresses</p>
                  <p className="text-sm text-foreground/60">Manage delivery addresses</p>
                </button>

                <button className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  <p className="font-medium text-foreground">Payment Methods</p>
                  <p className="text-sm text-foreground/60">Manage saved cards and wallets</p>
                </button>
              </div>
            </div>

            <div className="border-t border-border"></div>

            {/* Danger Zone */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-red-600">Danger Zone</h3>
              <button className="w-full px-4 py-3 border border-red-200 bg-red-50 text-red-700 rounded-lg font-medium hover:bg-red-100 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
