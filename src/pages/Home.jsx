import DeliveryCharge from "../components/DeliveryCharge";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import OurPromise from "../components/OurPromise";
import ReviewsSection from "../components/ReviewsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <WhyChoose />

      <ProductsSection />

      <DeliveryCharge />

      <AboutSection />

      <OurPromise />

      <ReviewsSection />

      <FAQSection />

      <ContactSection />

      <Footer />
    </>
  );
}

export default Home;