import { Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">
                VA
              </div>
              <span className="text-lg font-bold">Valleyalley</span>
            </div>
            <p className="text-sm text-background/70">
              Urban outdoor wear for daily movement. Bold, playful, and eco-friendly.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-base">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="text-background/70 hover:text-background transition-colors">
                  T-Shirts
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/70 hover:text-background transition-colors">
                  Jackets
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/70 hover:text-background transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#story" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-base">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; 2024 Valleyalley. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
