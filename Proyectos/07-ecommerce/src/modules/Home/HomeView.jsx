import Carousel from "./components/Header"
import OurProducts from "./components/OurProducts"
import Features from "./components/Features"
import ProductsCarousel from "./components/ProductsCarousel"
import Footer from "./components/Footer"

const HomeView = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Carousel />
      <Features />
      <ProductsCarousel />
      <OurProducts />
      <Footer />
    </div>
  )
}

export default HomeView
