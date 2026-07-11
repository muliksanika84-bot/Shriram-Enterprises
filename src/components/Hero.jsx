import "./Hero.css";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/images/hero-image.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="hero-badge">
          <FaLeaf />
          100% Pure & Natural
        </span>

        <h1>
          Premium <span>Masalas</span>
        </h1>

        <p>
          Welcome to <strong>Shriram Masales</strong>. We provide premium quality
          turmeric powder and authentic spices that are hygienically processed,
          rich in aroma, and full of natural taste.
        </p>

        <div className="hero-buttons">

          <a href="#products" className="primary-btn">
            View Products
            <FaArrowRight />
          </a>

          <a
            href="https://wa.me/919890070845?text=Hello%20Shriram%20Masales,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>

        </div>

        <div className="hero-features">
          <span>🌾 Farm Fresh</span>
          <span>🛡️ 100% Natural</span>
          <span>📦 Hygienically Packed</span>
          <span>⭐ Premium Quality</span>
        </div>

      </div>

      <div className="hero-image">
  <img
    src={heroImage}
    alt="Shriram Masales Premium Products"
  />
</div>

    </section>
  );
}

export default Hero;