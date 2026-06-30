import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ReviewsSection from "../components/ReviewsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import OurPromise from "../components/OurPromise";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Stats />
      <ProductsSection />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <OurPromise />
      <Footer />
    </>
  );
}

export default Home;