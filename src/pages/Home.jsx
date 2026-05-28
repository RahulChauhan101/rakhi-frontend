import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import ProductsSection from "../components/ProductsSection";
import Delivery from "../components/Delivery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {

  return (

    <div>

      <Hero />
      <Categories />
      <BestSeller />
      <ProductsSection title="Featured Products" limit={6} viewAllLabel="See All Products" />
      <Delivery />
      <Testimonials />
      <Footer />

    </div>

  );

}

export default Home;