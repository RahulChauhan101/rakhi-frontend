import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import Delivery from "../components/Delivery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {

  return (

    <div style={{ paddingTop: "90px" }}>

  

      <Hero />
      <Categories />
      <BestSeller />
      <Delivery />
      <Testimonials />
      <Footer />
    </div>

  );

}

export default Home;