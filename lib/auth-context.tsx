'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Check if we're on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Check if user is logged in on mount
  useEffect(() => {
    if (!isClient) return
    
    const storedUser = localStorage.getItem('valleyalley_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        localStorage.removeItem('valleyalley_user')
      }
    }
  }, [isClient])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simple validation - in production, this would be a real API call
      if (email && password.length >= 6) {
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name: email.split('@')[0],
        }
        setUser(newUser)
        if (typeof window !== 'undefined') {
          localStorage.setItem('valleyalley_user', JSON.stringify(newUser))
        }
      } else {
        throw new Error('Invalid email or password')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email && password.length >= 6 && name) {
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
        }
        setUser(newUser)
        if (typeof window !== 'undefined') {
          localStorage.setItem('valleyalley_user', JSON.stringify(newUser))
        }
      } else {
        throw new Error('All fields are required')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('valleyalley_user')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    // Return a default context if not wrapped in provider
    return {
      user: null,
      isLoading: false,
      login: async () => {},
      register: async () => {},
      logout: () => {},
      isAuthenticated: false,
    }
  }
  return context
}
