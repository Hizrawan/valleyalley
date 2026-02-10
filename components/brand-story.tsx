export default function BrandStory() {
  return (
    <section id="story" className="w-full bg-gradient-to-br from-secondary/10 to-accent/10 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Playful. Memorable. Affordable.
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Valleyalley was born from a simple idea: create urban outdoor wear that doesn't compromise on style, quality, or price. We believe outdoor living should be accessible to everyone, whether you're hitting the trails or hanging out in the city.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <span className="text-xl">🎨</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Playful Design</h3>
                  <p className="text-foreground/70">
                    Bold colors and simple graphics that make you smile. We don't take ourselves too seriously.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20">
                    <span className="text-xl">♻️</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Eco-Conscious</h3>
                  <p className="text-foreground/70">
                    Made with sustainable materials and responsible practices. Feel good about what you wear.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <span className="text-xl">🚀</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Always Flexible</h3>
                  <p className="text-foreground/70">
                    From casual hangouts to active adventures, Valleyalley adapts to your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary/20 p-6 sm:p-8 border border-primary/30 space-y-2 h-48 flex flex-col justify-end">
                <p className="text-3xl sm:text-4xl font-bold text-primary">5</p>
                <p className="text-sm sm:text-base font-medium text-foreground">Product Types</p>
              </div>

              <div className="rounded-xl bg-secondary/20 p-6 sm:p-8 border border-secondary/30 space-y-2 h-48 flex flex-col justify-end">
                <p className="text-3xl sm:text-4xl font-bold text-secondary">100%</p>
                <p className="text-sm sm:text-base font-medium text-foreground">Authentic</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-accent/20 p-6 sm:p-8 border border-accent/30 space-y-2 h-48 flex flex-col justify-end">
                <p className="text-3xl sm:text-4xl font-bold text-accent">4</p>
                <p className="text-sm sm:text-base font-medium text-foreground">Color Palettes</p>
              </div>

              <div className="rounded-xl bg-primary/10 p-6 sm:p-8 border border-primary/20 space-y-2 h-48 flex flex-col justify-end">
                <p className="text-3xl sm:text-4xl font-bold text-foreground">Affordable</p>
                <p className="text-sm sm:text-base font-medium text-foreground/70">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-card rounded-2xl border border-border p-8 sm:p-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Ready to Join the Valley?</h3>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Start your urban outdoor journey today. Get exclusive updates on new collections and special offers.
            </p>
            <div className="flex gap-4 justify-center pt-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-6 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary text-base"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
