export interface Product {
  id: number
  name: string
  category: 'T-Shirt' | 'Jacket' | 'Shorts' | 'Hat' | 'Bag'
  price: number
  priceDisplay: string
  emoji: string
  description: string
  colors: string[]
  fullDescription: string
  inStock: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Essential T-Shirt',
    category: 'T-Shirt',
    price: 199000,
    priceDisplay: 'Rp 199K',
    emoji: '👕',
    description: 'Comfortable cotton blend perfect for everyday wear',
    colors: ['#fd6c22', '#febb26', '#76b3d1'],
    fullDescription:
      'Made from premium cotton blend fabric, the Essential T-Shirt is perfect for daily movement. Lightweight, breathable, and durable. Available in multiple colors to match your style.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Urban Windbreaker',
    category: 'Jacket',
    price: 599000,
    priceDisplay: 'Rp 599K',
    emoji: '🧥',
    description: 'Water-resistant jacket for all seasons',
    colors: ['#fd6c22', '#aea536'],
    fullDescription:
      'The Urban Windbreaker combines style with functionality. Water-resistant material keeps you dry, while the lightweight design makes it perfect for active outdoor adventures.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Outdoor Shorts',
    category: 'Shorts',
    price: 349000,
    priceDisplay: 'Rp 349K',
    emoji: '🩳',
    description: 'Quick-dry shorts for active movement',
    colors: ['#76b3d1', '#aea536', '#febb26'],
    fullDescription:
      'Quick-dry technology ensures you stay comfortable whether youre at the gym or on the trails. Multiple pockets for storage and an elastic waistband for flexibility.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Classic Dad Hat',
    category: 'Hat',
    price: 149000,
    priceDisplay: 'Rp 149K',
    emoji: '🧢',
    description: 'Relaxed fit with curved visor',
    colors: ['#fd6c22', '#febb26', '#76b3d1'],
    fullDescription:
      'The timeless dad hat style with a relaxed fit and curved visor. Perfect for sunny days and casual street style. Adjustable strap for comfort.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Bucket Hat',
    category: 'Hat',
    price: 149000,
    priceDisplay: 'Rp 149K',
    emoji: '🎩',
    description: 'Functional and trendy bucket style',
    colors: ['#aea536', '#fd6c22', '#76b3d1'],
    fullDescription:
      'Trendy bucket hat with full coverage and functional design. Perfect for outdoor activities and adds an instant cool factor to any outfit.',
    inStock: true,
  },
  {
    id: 6,
    name: 'Sling Bag',
    category: 'Bag',
    price: 279000,
    priceDisplay: 'Rp 279K',
    emoji: '👜',
    description: 'Compact sling bag for essentials',
    colors: ['#fd6c22', '#aea536', '#febb26'],
    fullDescription:
      'Compact and practical sling bag perfect for carrying your essentials during daily commute or outdoor activities. Durable material with multiple compartments.',
    inStock: true,
  },
]
