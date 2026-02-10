import Header from '@/components/header'
import Hero from '@/components/hero'
import Products from '@/components/products'
import BrandStory from '@/components/brand-story'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Products />
      <BrandStory />
      <Footer />
    </main>
  )
}
