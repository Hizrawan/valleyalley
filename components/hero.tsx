export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary w-fit">
              <span className="text-sm font-medium">New Collection Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Move Daily,{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Stay Bold
              </span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/70 max-w-xl text-pretty leading-relaxed">
              Urban outdoor wear designed for your lifestyle. From t-shirts to jackets, hats to sling bags—gear that moves with you, wherever you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors text-base">
                Explore Products
              </button>
              <button className="px-8 py-3 border-2 border-foreground text-foreground rounded font-semibold hover:bg-foreground/5 transition-colors text-base">
                Learn Our Story
              </button>
            </div>

            <div className="flex gap-8 pt-6 flex-wrap text-sm text-foreground/70">
              <div>
                <p className="font-bold text-lg text-foreground">5 Collections</p>
                <p>T-shirts • Jackets • Shorts • Hats • Bags</p>
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">Eco-Friendly</p>
                <p>Sustainable & responsible</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md h-96 rounded-3xl border-4 border-primary/30 overflow-hidden shadow-xl">
              <img
                src="/hero-visual.jpg"
                alt="Urban outdoor lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-lg font-semibold">Urban Outdoor</p>
                  <p className="text-sm opacity-90">Designed for Daily Movement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
